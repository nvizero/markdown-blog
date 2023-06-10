
## in Prod
yarn run build 

## and after
pm2 start yarn --name "blog" --interpreter bash -- start
