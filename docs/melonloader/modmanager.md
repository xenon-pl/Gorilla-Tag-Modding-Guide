# Installation Guide

::: tip
If you do not know how to find your game path, refer to [Locating Your Game](/docs/extra/locating-your-game.md).
:::

::: tip
If you need help with installation, don't hesitate to ask in the [Gorilla Tag Modding Hub Discord](https://discord.gg/5rTmMjtECf)!
:::

## Mod Managers

Although a mod manager isn't strictly required for installation, **its very much recommended**.

This guide will demonstrate how to use [GorillaMelonManager](https://github.com/GorillaTagModdingHub/GorillaMelonManager).

## 0. Preface

::: tip HOLD UP!
This step isn't strictly required, as GorillaMelonManager can do it for you!
:::

If you are migrating from BepInEx, you need to delete it from your Gorilla Tag installation.
Find your Gorilla Tag folder, and delete the following files:

```
BepInEx/
changelog.txt
doorstop_config.ini
winhttp.dll
```

## 1. Download GorillaMelonManager

To easily download and manage mods, we'll use GorillaMelonManager.
Downloads are on the [GorillaMelonManager GitHub Releases](https://github.com/GorillaTagModdingHub/GorillaMelonManager/releases/). Pick the file which matches your platform.

![GorillaMelonManager GitHub Release Demonstration](/assets/gmm.png)

## 1.1. Install MelonLoader

Once you open GorillaMelonManager, go to the settings tab and verify that your game path is correct. If it's not, or installation fails, set it!

Next, you want to press `Install MelonLoader`

![screenshot of melonloader installer](/assets/installml.png)

::: tip HOLD UP!
If the installation fails, report the issue to the Gorilla Tag Modding Hub Discord!
:::

## 2. Download GorillaLibrary

Congratulations, you've now successfully modded Gorilla Tag!

To ensure all your mods work, you need GorillaLibrary.
Go to [GorillaLibrary's GitHub Releases](https://github.com/GorillaTagModdingHub/GorillaLibrary/releases), and download both `GorillaLibrary.dll` and `GorillaLibrary.GameModes.dll`

![screenshot of gorillalib git releases](/assets/glib2.png)

Next, find your Gorilla Tag folder, and both of the files into `Mods/`.

::: warning HOLD UP!
**MAKE SURE** that you have **BOTH** GorillaLibrary files, otherwise things such as Modded Lobbies, and many mods won't work.
:::

## Finishing up

You've successfully modded your game!

To find mods to install, refer to the [Gorilla Tag Mod Hub](https://discord.gg/5rTmMjtECf), or the [Gorilla Tag GameBanana](https://gamebanana.com/games/9496) (managed via GorillaMelonManager).

::: tip
If you're using Linux, you need to do one more step.
Refer to [Linux](/docs/extra/linux) for this.
:::
