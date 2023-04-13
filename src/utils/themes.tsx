import colors from 'tailwindcss/colors';
import { updateTailWindConfigs } from '@/pages/api/updateTailwind';


export const getThemeColour = (theme:string) =>{
    if (theme=="light"){
    const lightTheme = {
         backgroundColor: '#fafafa',
         textColor: '#0a0a0a',
         darkMode:true,
      }
    return lightTheme
    }

    if (theme=="dark"){
        const darkTheme = {
            backgroundColor: '#0a0a0a',
            textColor: '#fafafa',
            darkMode:false,
      }
    return darkTheme
    }
}

export const setThemeColors = async (theme:string) => {
  
    // let backgroundColor = '';
    // let textColor = '';

 const Theme = getThemeColour(theme);

 console.log(Theme,"ThemeTheme")


 const res = await fetch('/api/updateTailwind', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({Theme}),
  });

  const data = await res.json();

  if (data.success) {
    console.log('Tailwind config updated successfully');
  } else {
    console.error('Failed to update Tailwind config');
  }
  
};
