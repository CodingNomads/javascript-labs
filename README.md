# Clone and Create Your Own Origin

These setup steps are here mainly for you to get those sweet, sweet green [contribution](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/viewing-contributions-on-your-profile#what-counts-as-a-contribution) boxes on your profile.

You don't want to work on a basic clone of this repository, because then you won't be able to push your changes to GitHub, so no contributions. You also don't want to fork this repository, because GitHub doesn't count contributions unless they get merged to the original repository's main branch.

So in the following steps, you'll essentially create your own repository from scratch and copy the code from this repository into your own:

1. **Clone** this repository to your machine.
2. Create a _new_ repository on your GitHub account. _Don't_ fork this repository. Don't clone it yet. Take note of the URL of your new, blank GitHub repository:

   ```text
   git@github.com:<YOUR_USERNAME>/<YOUR_REPOSITORY_NAME>.git
   ```

3. From the command line, navigate to your local clone of _this_ repository and view the remote:

   ```bash
   $ git remote -v
   origin git@github.com:CodingNomads/javascript-labs.git (fetch)
   origin git@github.com:CodingNomads/javascript-labs.git (push)
   ```

   This should show you the URL of the Coding Nomads js_201_labs repository as above. You'll be changing this to your new empty repository:

   ```bash
   $ git remote set-url origin git@github.com:<YOUR_USERNAME>/<YOUR_REPOSITORY_NAME>.git
   ```

   Then run `git remote -v` to check that it's been replaced.

   Finally, you are ready to push the labs to your blank repository:

   ```bash
   git push
   ```

   This will update your blank repository with all the commits done on the labs repository.

4. Create a branch to work on, and once you are ready for your mentor to look over your work, create a pull request and request a review from them. Then you'll merge it together. Start new branches and pull requests for each section.

If at any point you are stuck or are unsure, reach out to your mentor, or post in the forum.
