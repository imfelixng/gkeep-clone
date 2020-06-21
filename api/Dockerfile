FROM hayd/alpine-deno:latest

EXPOSE 5000

ADD . .

# RUN deno cache --allow-net --allow-write --allow-read --allow-plugin --unstable src/app.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-write", "--allow-plugin", "--unstable", "src/app.ts"]