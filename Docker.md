# Docker commands

## Build the image

```bash
docker build -t 192.168.178.21:5000/dotnetcore-vue-template .
```

## Run the image

```bash
docker run -d -p 8080:80 192.168.178.21:5000/dotnetcore-vue-template
```
