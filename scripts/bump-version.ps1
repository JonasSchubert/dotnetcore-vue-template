$oldVersion = (Get-Content package.json) -join "`n" | ConvertFrom-Json | Select -ExpandProperty "version"
$oldDate = ($oldVersion -split "-")[0]
$oldPatch = [int]::Parse(($oldVersion -split "-")[1])

$newDate = Get-Date -Format yy.MM.dd
$newPatch = 0

if($oldDate -eq $newDate) {
    $newPatch = $oldPatch + 1
}

# Root

## package.json & package-lock.json

$oldVersionJson = "$oldDate-$oldPatch"
$newVersionJson = "$newDate-$newPatch"

(Get-Content package.json) -replace $oldVersionJson, $newVersionJson | Out-File -encoding ASCII package.json
(Get-Content package-lock.json) -replace $oldVersionJson, $newVersionJson | Out-File -encoding ASCII package-lock.json

git add package.json
git add package-lock.json

# Update SPA

## README.md

$oldVersionMd = "$oldDate--$oldPatch"
$newVersionMd = "$newDate--$newPatch"

(Get-Content dotnetcore-vue-template/ClientApp/README.md) -replace $oldVersionMd, $newVersionMd | Out-File -encoding ASCII dotnetcore-vue-template/ClientApp/README.md

git add dotnetcore-vue-template/ClientApp/README.md

## package.json & package-lock.json

(Get-Content dotnetcore-vue-template/ClientApp/package.json) -replace $oldVersionJson, $newVersionJson | Out-File -encoding ASCII dotnetcore-vue-template/ClientApp/package.json
(Get-Content dotnetcore-vue-template/ClientApp/package-lock.json) -replace $oldVersionJson, $newVersionJson | Out-File -encoding ASCII dotnetcore-vue-template/ClientApp/package-lock.json
(Get-Content dotnetcore-vue-template/ClientApp/tests/unit/app.spec.ts) -replace $oldVersionJson, $newVersionJson | Out-File -encoding ASCII dotnetcore-vue-template/ClientApp/tests/unit/app.spec.ts

git add dotnetcore-vue-template/ClientApp/package.json
git add dotnetcore-vue-template/ClientApp/package-lock.json
git add dotnetcore-vue-template/ClientApp/tests/unit/app.spec.ts

# Update API

## README.md

$oldVersionApi = "$oldDate.$oldPatch"
$newVersionApi = "$newDate.$newPatch"

(Get-Content dotnetcore-vue-template/README.md) -replace $oldVersionApi, $newVersionApi | Out-File -encoding ASCII dotnetcore-vue-template/README.md

git add dotnetcore-vue-template/README.md

## dotnetcore-vue-template.csproj

(Get-Content dotnetcore-vue-template/dotnetcore-vue-template.csproj) -replace $oldVersionApi, $newVersionApi | Out-File -encoding ASCII dotnetcore-vue-template/dotnetcore-vue-template.csproj

git add dotnetcore-vue-template/dotnetcore-vue-template.csproj

# Update API.Test

## dotnetcore-vue-template.Test.csproj

(Get-Content dotnetcore-vue-template.Test/dotnetcore-vue-template.Test.csproj) -replace $oldVersionApi, $newVersionApi | Out-File -encoding ASCII dotnetcore-vue-template.Test/dotnetcore-vue-template.Test.csproj

git add dotnetcore-vue-template.Test/dotnetcore-vue-template.Test.csproj

# Commit

git commit -m "chore: bumps version to $newVersionApi"
