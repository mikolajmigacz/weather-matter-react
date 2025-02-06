import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
  arrayUnion,
  arrayRemove,
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore';

import { db } from '../../config/firebase';
import { CityService } from '../cityInfo/cityInfo.service';
import { CityDetails, FirestoreCityData } from '../cityInfo/cityInfo.types';
import { CityMapper } from '../cityInfo/mappers';

import { FavoriteCityResponse, FirestoreCityDetails } from './favoriteCities.types';

export class FavoriteCityService {
  private static readonly COLLECTION_NAME = 'favoriteCities';
  private static readonly NOTIFICATIONS_COLLECTION = 'notifications';

  static async getFavoriteCities(
    userId: string
  ): Promise<FavoriteCityResponse & { cities?: CityDetails[] }> {
    try {
      if (!userId) {
        return { success: false, error: 'User not logged in' };
      }

      const userDocRef = doc(db, this.COLLECTION_NAME, userId);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        console.warn(`No favorite cities found for user ${userId}`);
        return { success: true, cities: [] };
      }

      const data = userDoc.data() as { cities: FirestoreCityData[] };
      const mappedCities = data.cities.map(CityMapper.fromFirestore);
      return { success: true, cities: mappedCities || [] };
    } catch (error) {
      console.error('Error fetching favorite cities:', error);
      return { success: false, error: 'Failed to fetch favorite cities' };
    }
  }

  static async addFavoriteCity(
    userId: string,
    cityName: string
  ): Promise<FavoriteCityResponse & { addedCity?: CityDetails }> {
    try {
      if (!userId) {
        return { success: false, error: 'User not logged in' };
      }

      const cityDetails = await CityService.getCityDetails(cityName);
      if (!cityDetails) {
        return { success: false, error: 'Failed to fetch city details' };
      }

      const userDocRef = doc(db, this.COLLECTION_NAME, userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const currentData = userDoc.data() as { cities: FirestoreCityDetails[] };

        if (currentData?.cities?.some((c) => c.key === cityDetails.key)) {
          return { success: false, error: 'City already in favorites' };
        }

        await updateDoc(userDocRef, {
          cities: arrayUnion(CityMapper.toFirestore(cityDetails)),
        });
      } else {
        await setDoc(userDocRef, {
          cities: [CityMapper.toFirestore(cityDetails)],
        });
      }

      // Create a notification
      await this.createNotification(
        userId,
        'New Favorite City Added',
        `You added ${cityDetails.localizedName} to your favorite cities.`
      );

      return { success: true, addedCity: cityDetails };
    } catch (error) {
      console.error('Error adding favorite city:', error);
      return { success: false, error: 'Failed to add favorite city' };
    }
  }

  static async removeFavoriteCity(userId: string, cityKey: string): Promise<FavoriteCityResponse> {
    try {
      if (!userId) {
        return { success: false, error: 'User not logged in' };
      }

      const userDocRef = doc(db, this.COLLECTION_NAME, userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const currentData = userDoc.data() as { cities: FirestoreCityDetails[] };
        const cityToRemove = currentData.cities.find((city) => city.key === cityKey);

        if (!cityToRemove) {
          return { success: false, error: 'City not found in favorites' };
        }

        // Remove the city from the array
        await updateDoc(userDocRef, {
          cities: arrayRemove(cityToRemove),
        });

        // Create a notification
        await this.createNotification(
          userId,
          'Favorite City Removed',
          `You removed ${cityToRemove.localizedName} from your favorite cities.`
        );

        return { success: true };
      }

      return { success: false, error: 'No favorite cities found for the user' };
    } catch (error) {
      console.error('Error removing favorite city:', error);
      return { success: false, error: 'Failed to remove favorite city' };
    }
  }

  private static async createNotification(userId: string, title: string, body: string) {
    try {
      // Fetch the user document to verify existence and get FCM token
      const userDocRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        console.warn('User document not found for notification creation');
        return;
      }

      const userData = userDoc.data();
      const fcmToken = userData?.fcmToken;

      if (!fcmToken) {
        console.warn('No FCM token found for the user');
        return;
      }

      // Create a new notification document
      await addDoc(collection(db, this.NOTIFICATIONS_COLLECTION), {
        userId,
        title,
        body,
        fcmToken,
        createdAt: serverTimestamp(),
      });

      console.log('Notification created successfully');
    } catch (error) {
      console.error('Error creating notification:', error);
    }
  }
}
