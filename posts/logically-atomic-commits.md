---
title: "Logically atomic commits"
date: "2021-05-27"
category: "process"
canonical: "https://benmatselby.dev/post/logical-commits/"
featuredImage: "test.jpg"
author: "ben"
---

When forming a new team (or joining a team for that matter), I always try to get the following item in our code review standards, or ways of working.

> Make sure all commits in version control are logically atomic.

## What is a logically atomic commit?

A logically atomic commit is the smallest, most meaningful change you can make to the software. It's big enough to add value, but small enough to be manageable.

It bundles useful changes together essentially.

Let's walk through a theoretical example. The example change is to a web application and involves the following changes:

- A change to a back end API.
- A change in the UI to utilise the API change mentioned above.
- A change to the README to explain that the UI feature can be toggled on/off.

Let's say we have a couple of code reviews from other team members too, for good measure. So you may think that would be 5 commits, the three mentioned above, and 2 code review feedback changes.

This **would not produce logically atomic commits**.

So, what would be logically atomic?

It would boil down, in my opinion, to the API change.

- If the API change is _only_ for the UI, then everything mentioned above, including the code review feedback would be a single "logically atomic commit".
- If the API change could be used for other use cases, either now or in the future, then there would be two "logically atomic commits".
  - A commit for the API change (including any code review feedback changes required).
  - A commit for the UI and documentation changes.

## Why is it important?

As with most things in life, you can absolutely get by without doing the above. However, to move at pace, to have confidence in changes to software, then this is a technique that should be embraced.

If you work in this manner, and [rebase/squash/move](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) commits to keep them logically atomic, you can:

- Use your tools effectively, for example you could use `git revert` if you are using Git.
  - This saves you have to code a reversal of the features, if the product team want the feature removing.
- It keeps your commit history useful, rather than a dumping ground of "fix", "typo", "testing".
  - This adds no value to the team.
- Curate commits to provide learning material to new developers.
  - If a piece of work needs to be conducted again in a similar manner, you could provide a commit id to the developer.
- Code review the changes in a more meaningful way, and see how a solution hangs together.
  - An engineer I work with always reviews a pull request, one commit at a time.
  - This way of working helps identify when commits are logical.
- It helps to reduce obsolete code.
  - If you came across a commit of code with no useful commit message, and with no seemingly linked usage, it could be tricky to find out if the code is used.
- It saves development time.
  - Another example may be coding standards. Let's say your team have now defined coding standards, and you work on a large codebase. You come across a file that does not adhere to the coding standards, so you update the code. You also code the feature change or bug fix. You commit sparingly, meaning at the end of your work, you commit everything as one change. Let's say that your change turns out to be redundant, and gets reverted, you also lose the coding standards change, which you want to keep. This means we have wasted even more development time. This should have been two commits: a coding standard change, and the feature/bug fix.

## Conclusion

Hopefully this post helps explain what a "locally atomic commit" is, and why it's important to even care about such a thing.

## See also

- [Git commands to get you through the day](https://benmatselby.dev/post/git-101/)
- [Squashing commits](https://benmatselby.dev/post/squashing-commits/)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- [Git Tools - Rewriting History](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)
