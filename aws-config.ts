import AWS from 'aws-sdk';

let config ;

export const awsinitialize=()=>{
  config = AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });
}

// export const getConfig=()=>{
//   awsinitialize();
//   // return config;
// }

export default AWS;