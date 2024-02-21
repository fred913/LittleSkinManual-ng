---
outline: [2, 3]
---

<script setup>
import GetCSL from '../../../components.en/GetCSL.vue'
</script>

# Configuring Mods

LittleSkin only provides the functionality for uploading, storing, retrieving, and sharing textures. To display the textures you've set in LittleSkin in Minecraft, you need to install a skin mod in your Minecraft client and modify the corresponding configuration files.

::: tip TIP
Please search on your own on how to install mods, as this article will not explain how to install skin mods, only how to configure them to load textures from LittleSkin.

In some cases, after installing a skin mod, you may need to start the game and enter a save for the mod to automatically generate a configuration file; if you have enabled version isolation in the launcher, the path to the configuration file may differ.
:::

::: danger REMEMBER
You only need to use one skin mod. Please do not install multiple skin mods at the same time, otherwise, at best, textures will not load properly, and at worst, it may cause the game to crash.
:::

::: warning NOTE
You can also choose [Yggdrasil external login](/yggdrasil/index.md) to load textures. However, except for SkinPort, do not use Yggdrasil external login and skin mod at the same time, as it may not load textures properly.
:::

## CustomSkinLoader

CustomSkinLoader is our most recommended skin mod, also known as **CSL** or **Universal Skin Patch**.

You can find more information about CustomSkinLoader on the following websites:

- [MCBBS](https://www.mcbbs.net/thread-269807-1-1.html)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/customskinloader)
- [MC Encyclopedia (mcmod.cn)](https://www.mcmod.cn/class/883.html)

<GetCSL />

### 14.7 +

From CustomSkinLoader 14.7 onwards, LittleSkin has been added to the default loading list of CustomSkinLoader, with a loading order just after the official skins. In most cases, after installation, you don't need to make any modifications to load textures from LittleSkin. :tada:

If you load a skin in the game that you have never used before, or only the skin is loaded without the cape, it is usually because there is a conflict with an official character with the same name, preventing the loading of textures from LittleSkin. Please refer to the configuration method applicable to CustomSkinLoader 13.1 ~ 14.6a below to modify the CustomSkinLoader configuration file.

### Older Versions <Badge type="danger" text="👎 Not Recommended" />

::: warning NOTE

We no longer recommend using the following ancient versions of CustomSkinLoader.

- For Minecraft 1.7.10, you can install [CustomSkinLoader](#customskinloader) and [CompatibilityLayerForCustomSkinLoader](#compatibilitylayerforcustomskinloader) simultaneously.

- For lower versions, there is currently no good solution.

:::

#### 13.1 ~ 14.6a

::: details Using ExtraList

Starting from CustomSkinLoader 14.4, it supports adding skin sites via ExtraList, which is also one of our recommended methods. You can download the ExtraList file for LittleSkin from the "Skin Mod" page in the user center and place it in the `.minecraft/CustomSkinLoader/ExtraList/` directory.

The ExtraList file will be automatically deleted after the first game startup and successful loading of CustomSkinLoader, which is normal. If everything goes well, LittleSkin will have been added to the top of CustomSkinLoader's loading list.

:::

#### 12.9 -

::: details Modifying Configuration Files

Configuration files are located in the `.minecraft/CustomSkinLoader/` directory, with two configuration files named `skinurls.txt` and `capeurls.txt`.

First, open `skinurls.txt` with Notepad or any code editor and replace all existing content with the following:

```
https://littleskin.cn/skin/*.png
https://skin.prinzeugen.net/skin/*.png
```

After saving and exiting, open `capeurls.txt` with Notepad or any code editor and replace all existing content with the following:

```
https://littleskin.cn/cape/*.png
https://skin.prinzeugen.net/cape/*.png
```

Save and exit, and when you open Minecraft again, you should be able to see the textures you set in LittleSkin.

:::

### Manually Editing Configuration Files {#edit-csl-config}

The configuration file is usually located in the `.minecraft/CustomSkinLoader/` directory, with only one configuration file named `CustomSkinLoader.json`.

::: tip TIP
You can download a configuration file tailored for LittleSkin [👉 here 👈](/CustomSkinLoader.json), which contains the same content as below. You just need to replace the original configuration file with this one.
:::

You can also open it with Notepad or any editor and replace all existing content with the following:

::: details Configuration File: `CustomSkinLoader.json`

<<< @/public/CustomSkinLoader.json{4-9 json:line-numbers}

:::

Save and exit, and when you open Minecraft again, you should be able to see the textures you set in LittleSkin.

### CompatibilityLayerForCustomSkinLoader

> Since the new version of CustomSkinLoader has stopped supporting Minecraft 1.7.10 from 14.7 onwards, but since the process of obtaining skins from the internet hasn't changed much between 1.7.10 and 1.8, the purpose of this mod is to allow the new version of CSL to be loaded by Forge 1.7.10.

You can find more information about CompatibilityLayerForCustomSkinLoader on the following websites:

- [MCBBS (Chinese)](https://www.mcbbs.net/thread-1109996-1-1.html)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/compatibilitylayerforcustomskinloader)
- [MCMod Encyclopedia (Chinese, mcmod.cn)](https://www.mcmod.cn/class/4160.html)

## SkinPort

If you want to load Alex model skins in Minecraft 1.7.10, you need to use SkinPort.

You can find more information about SkinPort on the following websites:

- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/skinport)
- [MCMod Encyclopedia (Chinese, mcmod.cn)](https://www.mcmod.cn/class/2700.html)

::: tip TIP
LittleSkin only supports `1.7.10-v10a` or newer versions of SkinPort.

If you use Yggdrasil external login to load textures, you only need to install any version of SkinPort without modifying the configuration file.
:::

::: danger REMEMBER
SkinPort is only suitable for Minecraft 1.7.10. For lower versions, there is currently no way to load Alex model skins.

Do not install SkinPort on other versions of Minecraft, as it may cause the game to crash.
:::

The configuration file is located in `.minecraft/config/skinport.cfg`. Please open it with Notepad or any code editor and replace all existing content with the following:

``` java:line-numbers
client {
    S:hostCustomServer=http://example.com
    S:hostCustomServer2Cape=https://littleskin.cn/cape/%name%.png  // [!code focus] // [!code warning]
    S:hostCustomServer2Skin=https://littleskin.cn/skin/%name%.png  // [!code focus] // [!code warning]
    B:useCrafatar=false
    B:useCustomServer=false
    B:useCustomServer2=true
    B:useMojang=false
}
```

Save and exit, and when you open Minecraft again, you should be able to see the textures you set in LittleSkin.

## Traditional Loading <Badge type="danger" text="👎 Not Recommended" />

``` http
# Skin Query API
https://littleskin.cn/skin/{playername}.png
# Cape Query API
https://littleskin.cn/cape/{playername}.png
```

For mods not listed above, you can try using these APIs to load your textures.

Please enter these two query APIs in the corresponding locations of your skin mod's configuration file. Where `{playername}` is the character name, please replace it with the appropriate placeholder.

You are also welcome to share your skin mod configuration methods, and we appreciate your help in improving this page.
