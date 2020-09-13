FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-focal-arm64v8 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build-net-core
WORKDIR /src
COPY dotnetcore-vue-template/dotnetcore-vue-template.csproj .
RUN dotnet restore
COPY dotnetcore-vue-template .
RUN dotnet build -c Release
RUN apt-get update -yq 
RUN apt-get install curl gnupg -yq 
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN rm -r ClientApp/src/libs
RUN git clone https://github.com/JonasSchubert/vue-library.git
RUN cp -rf vue-library/src/ ClientApp/src/libs/
RUN dotnet build "/src/dotnetcore-vue-template.csproj" -c Release -o /app/build

FROM build-net-core AS publish
RUN dotnet publish "/src/dotnetcore-vue-template.csproj" -c Release -o /app/publish

FROM base AS runtime
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "dotnetcore-vue-template.dll"]