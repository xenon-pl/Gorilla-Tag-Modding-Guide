---
prev: true
next: true
description: Learn how to install all the necessary prerequisites to get started with creating Gorilla Tag mods using MelonLoader.
---

# Initial Setup

This section will guide you through everything you need to start developing Gorilla Tag mods. By the end, your environment will be ready for coding, testing, and experimenting.

## Setting up your development environment {#setup-env}

Before creating mods, you’ll need some essential tools. The good news: they’re all **free**!

::: tip
This guide is loosely based on parts of the [MelonLoader setup guide](https://melonwiki.xyz/#/modders/quickstart), which is an excellent resource for modding beginners.
:::

### .NET SDK {#dotnet-sdk}

The .NET SDK (Software Development Kit) lets you turn your code into something your PC can run. Most of the tools you’ll use depend on it, though you won’t interact with it directly very often.

Download and install the latest .NET SDK from [Microsoft’s official page](https://dotnet.microsoft.com/en-us/download). It should look something like this:

[![.Net SDK download](/assets/netsdkdownload.png)](https://dotnet.microsoft.com/en-us/download)

---

### IDE (Integrated Development Environment)

A good IDE makes writing and managing code much easier. It’s more than just a text editor - it offers:

* Syntax highlighting
* Compiling
* Code completion
* Built-in tools (version control, linting, etc.)
* Debugging

Trying to mod using only Notepad is technically possible, but it’s not practical. Trust us - an IDE saves countless headaches.

**Recommended free IDEs:**

* [Visual Studio](https://visualstudio.microsoft.com/) - full-featured with a built-in decompiler.
* [JetBrains Rider](https://www.jetbrains.com/rider/) - **highly recommended**; the author uses this one. Comparable to Visual Studio with built-in decompiler.
* [Visual Studio Code](https://code.visualstudio.com/) - lightweight, more minimal, but still powerful.

---

### MelonLoader

MelonLoader is the mod loader we’ll use for Gorilla Tag. It handles injecting your mods into the game, so you can focus on coding without worrying about loading issues.

**To install MelonLoader:**

1. Download the latest MelonLoader installer from [the official site](https://melonwiki.xyz/#/modders/quickstart).
2. Run the installer and point it to your Gorilla Tag installation.
3. Launch the game once to allow MelonLoader to generate configuration files.

After installation, check the `Mods` folder inside your Gorilla Tag directory. This is where all your mods will go.

---

### Decompiler (highly recommended) {#decompiler}

A decompiler lets you peek behind the curtain of the game’s code. This is essential for modding because you need to know **what to modify**.

Free options include:

* [dnSpyEx](https://github.com/dnSpyEx/dnSpy)
* [ILSpy](https://github.com/icsharpcode/ILSpy)
* [dotPeek](https://www.jetbrains.com/decompiler/)

::: tip
Rider and Visual Studio already include decompiler functionality, so you may not need a separate tool. Different decompilers can display code slightly differently, so experiment if necessary.
:::

---

### Unity Explorer (optional) {#unity-explorer}

[Unity Explorer](https://github.com/yukieiji/UnityExplorer) is an in-game UI tool that lets you inspect, debug, and modify the game while it’s running. It’s optional but highly useful for understanding the game’s inner workings.

Download the version compatible with the [latest MelonLoader release.](https://github.com/yukieiji/UnityExplorer/releases/latest/download/UnityExplorer.MelonLoader.Mono.zip)

---

### Additional Tools (optional) {#other-tools}

There are many extra tools and plugins for MelonLoader that can enhance your modding workflow. A curated list is available in the [MelonLoader developer tools](https://melonwiki.xyz/#/modders/development-tools) section.

---

## Creating a GitHub Account {#create-github-account}

Version control is crucial for any development project. Git allows you to:

* Keep a complete history of your project
* Revert to previous versions if something breaks
* Collaborate with others efficiently

[GitHub](https://github.com/) is the most popular free platform for hosting Git repositories. Alternatives include [GitLab](https://about.gitlab.com/).

To create an account, go to [GitHub’s signup page](https://github.com/) and follow the instructions. GitHub also offers a [helpful guide](https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account).

---

## Next Steps

Once your environment is ready, you can move on to the **[starting a mod](starting-a-mod)** guide to create your first Gorilla Tag mod!
