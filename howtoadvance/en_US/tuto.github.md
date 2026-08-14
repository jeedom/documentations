# GitHub Tutorial

This tutorial introduces you to:

-   Creating a GitHub account
-   Fork of Jeedom Core or the documentation
-   Editing one or more files
-   Submit a change
-   Updating your fork

To contribute to Jeedom, you'll need to submit changes (PR: Pull Request).

# Creating a GitHub account

In this tutorial, we’ll cover how to create a GitHub account so you can report bugs (known as “issues” in GitHub terminology) or even suggest fixes (known as “pull requests” or “PRs” in GitHub terminology) for the entire Jeedom project—including its free plugins and documentation—or any other GitHub project you’d like to contribute to.

Go to [GitHub](https://github.com) and click the "Sign Up" button. You should then be taken to a page similar to the one below, where you'll need to enter a username, email address, and password, and then click **Create an account**

![tutorial.github1](../images/tuto.github1.png)

You'll then be taken to a second page like the one below. Don't change anything; just click **Continue**.

![tutorial.github2](../images/tuto.github2.png)

You’re now registered and on the page where you can configure your account settings. I recommend that you verify your email address so you can recover your account if you forget your password, for example, and also so you can submit changes. Feel free to explore the other options if you’re curious.

![tutorial.github3](../images/tuto.github3.png)

# Fork of Jeedom Core or the documentation

**Fork - Why - How**

Forking means copying a project into your GitHub repository so you can modify the code and documentation files and then submit a pull request to the original project, which will then be reviewed by the developer(s) of that project

Now that you have a GitHub account and are logged in with your verified email address, if you go to [here](https://github.com/jeedom/core) You're on the Jeedom project; on the right, there's a "Fork" button that lets you copy it to your GitHub repository.

![tutorial.github4](../images/tuto.github4.png)

## Editing one or more files

In my case, I want to push a change to the *history.class.php* file. This file is located in the Jeedom core, specifically here: core/class/

- So we're on my repository (TaGGoU91 / core), which is listed as a fork of Jeedom/core
- So we go to /core/class (the first "core" is in bold; that's the repository I'm in (core, see Petit 1))
- So we have our *history.class.php* file—click on the file

![tutorial.github5](../images/tuto.github5.png)

- So we're definitely in our file
- Click the pencil icon to enter edit mode

![tutorial.github6](../images/tuto.github6.png)

To search the file, place the cursor in the text block of the file you just opened in edit mode using the pencil icon, then press "Ctrl + F" to activate the search. Paste or type the text you're looking for (a specific term and just one line at a time, not an entire block all at once). Press "Enter" to start the search.
> **Tip**
>
> If you don't click inside the window containing the text or code you're looking for, the browser's search function will open, and in my case, on Google Chrome, it can't search directly within the code or documentation.

- The search field—yeah, that’s not much information; the copied line is much longer ;).

![tutorial.github7](../images/tuto.github7.png)

- The search results are highlighted in yellow
- The text in blue is what I just selected and want to modify or replace with my code. My modification

![tutorial.github14](../images/tuto.github14.png)

So I'll delete the block and then replace it.

Next, at the bottom, you’ll find the following: 1. Provide a clear title if possible. 2. Enter a slightly more detailed description (in my case, this would be too long; the link to the forum will be more informative). 3. Make sure this box is checked, like this. 4. Commit = Submit the change.

![tutorial.github8](../images/tuto.github8.png)

## Submit a change

The **commit** made above applies only to the project's fork in your GitHub space. To submit the changes to the original project, you must create a PR (Pull Request)

- Click on the Pull Request tab
- New Pull Request (PR for short)

![tutorial.github9](../images/tuto.github9.png)

- The PR will initiate a comparison between the Jeedom database and your repository (the fork).
- This shows the changes (the first one is because I’ve updated from Jeedom, and the second one is specifically about the change to the `lastchangestateduration` function—perfect!!!)
- The old code
- The new code
- Create the Pull Request (PR)

![tutorial.github10](../images/tuto.github10.png)

It is important to clearly explain the proposed changes so that the developer(s) of the original project understand them and can approve your request.

- Click on the three dots
- Copy the information you entered earlier
- Same thing—we'll copy it over (which is why we used …​ in step 1 to avoid having to rewrite it)
- Click "Create Pull Request"

![tutorial.github11](../images/tuto.github11.png)

**It's done.** Now you just have to wait for your PR to be approved.

Note: Only users with push permissions on Jeedom can approve the PR.

To make sure your change is included in the list, you can click on "Pull Requests"

![tutorial.github12](../images/tuto.github12.png)

We get the list of PRs awaiting validation. We can clearly see ours

![tutorial.github13](../images/tuto.github13.png)
