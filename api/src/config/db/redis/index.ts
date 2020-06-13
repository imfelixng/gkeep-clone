import { connect } from "https://denopkg.com/keroxp/deno-redis/mod.ts";

import { REDIS_HOST, REDIS_PORT } from './../../env/index.ts';
let redis;
try {
  redis = await connect({
    hostname: REDIS_HOST,
    port: REDIS_PORT,
  });
  console.log('Connect redis success!');
} catch (err) {
  console.log(err);
}

export {
    redis
}
