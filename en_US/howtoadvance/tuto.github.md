# Github Tutorial

This tutorial introduces you :

-   Creating a GitHub account
-   Fork of Jeedom Core or documentation
-   Editing one or more files
-   Submit a change
-   Updating your fork

To allow you to contribute to Jeedom, you will need to propose the modifications (PR : Pull request).

# Creating a GitHub account

We will discuss in this tutorial how to create a GitHub account, in order to be able to report bugs (issue in the GitHub language), or even propose corrections (Pull Request or PR in github language) for the entire Jeedom project, including its free plugins or documentation, or any other github project you would like to participate in.

Go to [github](https://github.com) and click on the sign up button. You should therefore be on a page similar to the one below and must therefore enter a username, an email and a password and then click on **Create an account**

![tuto.github1](images/tuto.github1.png)

You therefore arrive on a 2nd page as below and you do not change anything, you click on **Keep on going**

![tuto.github2](images/tuto.github2.png)

You are now registered and on the configuration page of your account options. I advise you to check the email address in order to be able to recover your account in the event of forgetting your password, for example, but also in order to be able to submit modifications. I also let you discover the other options if you are curious.

![tuto.github3](images/tuto.github3.png)

# Fork of Jeedom Core or documentation

**Fork - Why - How**

Fork is to copy a project in your github space, in order to be able to modify the code and documentation files and then submit a Pull Request to the original project, which will then be studied by the developer(s) of the said project

Now that you have a Github account and are logged in with your verified email address, if you visit [here](https://github.com/jeedom/core) you are on the jeedom project, on the right there is a fork button allowing you to copy it to your github space.

![tuto.github4](images/tuto.github4.png)

## Editing one or more files

So in my case I want to push a change to the file *history.class.php* This file is located in the jeedom core and more precisely here : core/class/

- We are therefore on my repository (TaGGoU91 / core) which is indicated as being a fork of Jeedom / core
- We therefore go to /core/class (the first core is in bold, this is the repository where I am (core, see Petit 1)
- So we have our file *history.class.php* - Click on the file

![tuto.github5](images/tuto.github5.png)

- We are therefore in our file
- We click on the pencil to enter in modification

![tuto.github6](images/tuto.github6.png)

In order to search in the file, position yourself in the text block of the file that you have just opened in edit mode with the pencil and you do a "Ctrl + F" to activate the search. Paste or specify the text you're looking for (one meaningful item and one line only, not a whole block at once). Validate with "Enter" to launch the search.
> **Tip**
>
> If you do not click in the window containing the text or code you are looking for, the browser search will open and in my case, on Google chrome, it does not know how to search in the code or documentation directly.

- The search field, yes it's quite thin as information, the copied line is much larger;).

![tuto.github7](images/tuto.github7.png)

- In yellow, it is the result of the search
- In blue, what I just selected and want to modify/replace with my code. My edit

![tuto.github14](images/tuto.github14.png)

So I delete the block then I replace it.

Then, on the lower part we find this : 1. Indicate an explicit title if possible 2. We enter a slightly more precise description (in my case, it would be too long, the link to the forum will be more meaningful) 3. We make sure that it is checked like this 4. On commit = Submit change

![tuto.github8](images/tuto.github8.png)

## Submit a change

The **commit** done above only concerns the fork of the project in your GitHub space. To submit the changes to the original project, you must make a PR (Pull Request)

- Click on the Pull Request tab
- New Pull Request (PR for friends)

![tuto.github9](images/tuto.github9.png)

- The PR will launch a comparison between the jeedom base with your repository (the fork).
- This indicates the modifications (the first is because I updated from jeedom, the second concerning precisely the change in the lastchangestateduration function, perfect !!!)
- The old code
- The new code
- We create the Pull Request (PR)

![tuto.github10](images/tuto.github10.png)

It is important to clearly explain the changes submitted so that the developer(s) of the original project understand and can validate your request.

- We click on the three small dots
- We copy the information that we entered previously
- Ditto, we copy (hence the use of …​ in step 1 to avoid rewriting)
- We click on Create Pull Request

![tuto.github11](images/tuto.github11.png)

**It's over.** You have to wait for your PR to be validated.

NB: Only users with a push right on Jeedom can validate the PR.

To make sure your modification is in the list, you can click on Pull Requests

![tuto.github12](images/tuto.github12.png)

We obtain the list of PR awaiting validation. We can see ours

![tuto.github13](images/tuto.github13.png)
