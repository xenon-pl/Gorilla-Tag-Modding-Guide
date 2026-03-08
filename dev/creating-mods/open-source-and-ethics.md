---
prev: true
next: true
description: A basic overview of the open-source approach used by the Gorilla Tag modding community.
---

# Open-source and ethics

## What is open-source?

Open-source software means that the source code is publicly available and can be used, modified, and shared by others.
This encourages a collaborative approach to software development where developers can learn from each other and build upon existing work.

However, there are some important things to understand when publishing open-source software.

### Licenses

A GitHub repository **without a license is not truly open-source**.

Without a license, default copyright laws apply. This means the creator retains all rights to their code, and others cannot legally copy, distribute, or modify it.

> Without a license, the default copyright laws apply, meaning that you retain all rights to your source code and no one may reproduce, distribute, or create derivative works from your work.
> *Source: [GitHub documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository#choosing-the-right-license)*

If you want your mods to be properly open-source, you should include a license in your repository.

Fortunately, choosing one is simple. GitHub provides a helpful website that explains common licenses and helps you choose one that fits your project:
[https://choosealicense.com/](https://choosealicense.com/)

::: warning
**We are not lawyers.** Our explanations of these licenses are based mainly on the information provided by `choosealicense.com`, along with community experience.
:::

For Gorilla Tag mods, the community commonly recommends one of the following licenses:

* **GNU General Public License v3.0 (GPL-3.0)**:
This license requires that any project using your code must also remain open-source under the same license. If someone creates a modified or extended version of your mod, they must publish their source code as well. This ensures that your work—and any derivatives—remain open and available to the community.

* **MIT License**:
The MIT license is more permissive. It allows others to use, modify, and distribute your code with fewer restrictions. People can even create closed-source versions of your mod. However, they must still include the original copyright notice and license.

### Healthy collaboration

A modding community thrives when developers help each other.

Keeping your mods open-source allows both current and future modders to learn from your work. It also allows others to maintain or update your mods if you ever stop working on them.

At the same time, it is important to collaborate ethically. Always give proper credit when using someone else’s work. Avoid copying code and presenting it as your own.

Similarly, if someone fixes a bug and submits a pull request, consider accepting it instead of copying the fix yourself. This ensures contributors receive proper credit and helps create a community where people feel comfortable contributing.