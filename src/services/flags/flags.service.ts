import axios from 'axios';
import { collection, doc, getDocs, writeBatch } from 'firebase/firestore';

import { db } from '../../config/firebase';

import { Flag, FlagApiResponse } from './flags.types';

export class FlagsService {
  private static readonly COLLECTION_NAME = 'flags';
  private static readonly API_URL = 'https://countriesnow.space/api/v0.1/countries/flag/images';

  static async setFlags(): Promise<void> {
    try {
      const flagsSnapshot = await getDocs(collection(db, this.COLLECTION_NAME));

      if (!flagsSnapshot.empty) {
        console.log('already filled');
        return;
      }

      const {
        data: { data: countries },
      } = await axios.get<FlagApiResponse>(this.API_URL);
      const batch = writeBatch(db);

      countries.forEach((country) => {
        const flag: Flag = {
          name: country.name,
          flagUrl: country.flag,
          iso2: country.iso2,
          iso3: country.iso3,
        };

        const flagRef = doc(collection(db, this.COLLECTION_NAME), country.iso2);
        batch.set(flagRef, flag);
      });

      await batch.commit();
    } catch (error) {
      console.error('Error setting flags:', error);
      throw error;
    }
  }
}
