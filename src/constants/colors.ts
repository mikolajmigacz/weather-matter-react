export const AppColors = {
  darkestGray: '#222831',
  darkGray: '#393E46',
  teal: '#00ADB5',
  lightestGray: '#EEEEEE',
};

export type AppColor = (typeof AppColors)[keyof typeof AppColors];
