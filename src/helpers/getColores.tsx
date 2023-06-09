import ImageColors from 'react-native-image-colors';


export const getImageColors = async( uri: string ) => {

    const colors = await ImageColors.getColors(uri, {});

    let primary;
    let secondary;

    switch (colors.platform) {
        case 'android':
          primary = colors.dominant;
          secondary = colors.average;
          break
        case 'web':
            primary = colors.dominant;
            secondary = colors.vibrant;
          break
        case 'ios':
            primary = colors.primary;
            secondary = colors.secondary;
          break
        default:
          throw new Error('Unexpected platform key')
      }

      console.log({ primary, secondary })

      return [primary, secondary];
  }