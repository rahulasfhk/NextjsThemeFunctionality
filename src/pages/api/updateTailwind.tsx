import path from 'path';
import { readFile, writeFile } from 'fs';

export default async function updateTailwindConfigs(req:any, res:any) {
    

  const { Theme :{backgroundColor, textColor,darkMode }} = req.body;
  console.log(backgroundColor,"backgroundColor",textColor,"textColorCOlor",darkMode,"darkModedarkMode")
  const configPath = path.resolve('./tailwind.config.js');
  readFile(configPath, 'utf8', (err, configContent) => {
    console.log(configContent,"configContentconfigContentconfigContent11")
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    // const newConfigContent = configContent
    //   .replace(/backgroundColor:\s+'\w+'/g, `backgroundColor:'${backgroundColor}'`)
    //   .replace(/textColor:\s+'\w+'/g, `textColor:'${textColor}'`);


  const newConfigContent = configContent
  .replace(/(darkMode:\s*)[^,\n]+/, `$1${darkMode}`)
  .replace(/(color:\s*)['"][^'"]*['"]/g, `$1'${textColor}'`)
  .replace(/(backgroundColor:\s*)['"][^'"]*['"]/g, `$1'${backgroundColor}'`)

  

    writeFile(configPath, newConfigContent, 'utf8', (err) => {
        console.log(newConfigContent,"neconfigsconfigsconfigs")
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.status(200).json({ success: true });
    });
  });
}
