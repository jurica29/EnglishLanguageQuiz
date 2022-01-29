# English Language Quiz
This is a quiz that tests your knowledge on English language and culture. 

<img src="./images/readmeimages/amiresponsive.jpg"/>

The deployed website can be viewed here. [English Language Quiz](https://jurica29.github.io/EnglishLanguageQuiz/).

## UX
### User Stories
+ As a user, I want to…
1.	be able to navigate through the quiz easily.
2.	see what is my current score all the time.
3.	see how much time I have left.
4.	see the feedback on my answers.
5.  get the final feedback on my performance and attempts at the end of the quiz.


### 1. Strategy 
* Project Purpose
  * Create an interactive quiz with consistent styling across all pages ensuring that the application runs flawlessly across all devices.

### 2. Scope
 * I wanted a simple, straightforward and intuitive UX experience.
 * Provide a fun and interactive application that tests users' English knowledge.
 * A site that is visually appealing on most devices.

### 3. Structure
*	A simple layout enables quick and easy navigation.
*	There are 3 basic parts of the quiz:
     * score counter in the upper left corner
     * time counter in the upper right corner
     * quiz card in the upper middle part of the page.

### 4. Skeleton
Wireframes created with Balsamiq. The project was developed from initial wireframes and very slight modifications were made during the development process to assure better usability. 

Click on the below page names to see these wireframes:

[Start page](https://github.com/jurica29/EnglishLanguageQuiz/blob/main/images/readmeimages/startpage.jpg)


[Quiz page](https://github.com/jurica29/EnglishLanguageQuiz/blob/main/images/readmeimages/quizpage.jpg)


[End page](https://github.com/jurica29/EnglishLanguageQuiz/blob/main/images/readmeimages/endpage.jpg)

### 5. Surface
* Colours

Main colours used are grey, whitesmoke and goldenrod. Grey is used for text and buttons, white for text and backgrounds of containers, while goldenrod is used for box shadowing and hovering for buttons.

<img src="./images/readmeimages/colourscheme.jpg"/>

* Font Selection
 
The font family used across the website for both headings and paragraphs is "Verdana, Geneva, Tahoma, sans-serif".

## Existing Features 

+ Navigation Bar 

 Featured on all three pages, the full responsive navigation bar includes links to the Home page, Quotes and Media page and is identical in each page to allow for easy navigation and consistent user experience.

<img src="assets/images/readmeimages/navbar.jpg" width="1100">

+ The home page image

<img src= "assets/images/Tesla2.jpg" width="400">

Tesla's portrait photo is used at the home page.

+ Home page

Home page is consisted of three main elements:

1. Introduction text

A fully responsive texbox containing a short textual introduction into Tesla's life.

<img src="assets/images/readmeimages/introductionbox.jpg" width="700">

2. Timeline

A center piece of the first page is this fully responsive timeline, which contains the most important events from Tesla's life.

<img src="assets/images/readmeimages/timeline.jpg" width="700">
(timeline snippet)

3. Newsletter box *(at the bottom across 3 pages)

This simple, effective and fully responsive newsletter box is located just before the footer. It is positioned in the same place across all 3 pages and allows for quick and easy newsletter subscription.

<img src="assets/images/readmeimages/newsletter.jpg">

+ Quotes page

1. Image in the center

Tesla's portrait is in the top centre position of the page.

<img src="assets/images/Tesla1.jpg">

2. Quotes

These quote boxes are positioned vertically across the centre of the page, fully responsive on smaller screen sizes.

<img src="assets/images/readmeimages/quotesboxes.jpg" width="400">

+ Media page 

1. Videos in containers (from Youtube)

These documentaries and other videos are embedded Youtube videos. They are positioned vertically across the centre of the page, in fully responsive containers.

<img src="assets/images/readmeimages/videos.jpg" width="400">

(video containers snippet)

+ Footer 

The footer section includes links to visit potential social media pages.
The links will open in a new tab to keep users on the page, while allowing easy navigation to share content. 

<img src="assets/images/readmeimages/footer.jpg">

# Testing

## Automated tests

  + HTML

  Passing the HTML from all templates and base into the W3C Markup Validator no errors have been found [W3C validator](https://validator.w3.org/).
  Code Validation results:
  
  |[Home Page](https://github.com/jurica29/Project-1/blob/27cb79af6f944ae9b2bcc8792944be6a03e72609/assets/images/readmeimages/validation1.jpg)     |[Quotes Page](https://github.com/jurica29/Project-1/blob/27cb79af6f944ae9b2bcc8792944be6a03e72609/assets/images/readmeimages/validation2.jpg)    |[Media Page](https://github.com/jurica29/Project-1/blob/27cb79af6f944ae9b2bcc8792944be6a03e72609/assets/images/readmeimages/validation3.jpg)|
    
   + CSS

No errors were found when passing through the official [W3C validator](https://jigsaw.w3.org/css-validator/). 

CSS validation results can be viewed [here](https://github.com/jurica29/Project-1/blob/27cb79af6f944ae9b2bcc8792944be6a03e72609/assets/images/readmeimages/cssvalidation.jpg)
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
No warnings were found.

## Manual Testing

   + Desktop

 Mozilla Firefox, Google Chrome, Microsoft Edge: everything is working good. Page loads and all of the page features are working.

   + Mobile
 
 Tested with Huawei P30, Samsung A52, Huawei P40 and iPhone 12. It is responsive as intended.

   + Mozilla Dev Tools
 
 Tested for available devices, webpage works well. It is responsive as intended.

 [Screenshots from a mobile phone device](https://github.com/jurica29/Nikola-Tesla/tree/main/assets/images/readmeimages/smallerscreens)

+ Errors

On the 3 pages, Wave showed 1 error that can be viewed [here](https://github.com/jurica29/Nikola-Tesla/tree/main/assets/images/readmeimages//wave.jpg). 

That error was fixed by adding the "aria-labelledby" attribute to the form, which helps the assistive technology, such as screen readers, to catalog the object, so that users can navigate between them.
   
The alerts for each page can be viewed on the links:

[Home](https://github.com/jurica29/Project-1/blob/a9966d3ce32d81fd5693004fe262ddf207458d04/assets/images/readmeimages/homealerts.jpg)

[Quotes](https://github.com/jurica29/Project-1/blob/a9966d3ce32d81fd5693004fe262ddf207458d04/assets/images/readmeimages/quotesalerts.jpg)

[Media](https://github.com/jurica29/Project-1/blob/a9966d3ce32d81fd5693004fe262ddf207458d04/assets/images/readmeimages/mediaalerts.jpg)

The second page has a different name in Github, instead of "quotes.html" it is named as "joinus.html". This happened due to change of plans and late realisation that the change will be permanent, so all changes made were already committed to "joinus.html".

## Future Features

I would like to add more content to media page, which could provide more audiovisual information, which would be possibly positioned in three columns across the page.
Also, maybe I would like to add more graphical addons, such as some sketches in the background, which would also need to be not limiting responsiveness of the website itself.
Moreover, maybe I would add an extra page with specific sections on Tesla's work, which could provide more details for technically more skilled visitors.

## Project Bugs and Solutions:

 No known bugs for now.

## Deployment

 The website was deployed to GitHub pages. 
 
 * The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab; 
  - From the source section drop-down menu, select the Master Branch;
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 
The live link can be found [here](https://github.com/jurica29/Nikola-Tesla).

### Forking the GitHub Repository:

By forking the GitHub Repository you will be able to make a copy of the original repository on your own GitHub account allowing you to view and/or make changes without affecting the original repository by using the following steps:
1. Log in to GitHub and locate the [GitHub Repository](https://github.com/jurica29/Nikola-Tesla)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/jurica29/Nikola-Tesla)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```
7. Press Enter. Your local clone will be created.

## Credits 

### Content

All content was written using sources as: 

- [World History Project](https://worldhistoryproject.org/topics/nikola-tesla)

- [Wikipedia](https://en.wikipedia.org/wiki/Nikola_Tesla)

### Media

- All pictures and images used in this project are from [depositphotos](https://depositphotos.com/) and [freepik](https://www.freepik.com/home).
- [Youtube](https://www.youtube.com/) videos were used on media page.
Pictures were treated (resized) with IrfanView app.

### Work based in other code

+ [Favicon generator](https://www.favicon-generator.org/) – Used to create favicon used on website.
+ [W3 Schools](https://www.w3schools.com/) - Used for variety of tutorials and deeper understanding of some important concepts related to both HTML and CSS.
+ [Online Tutorials Youtube channel](https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog) - Used for timeline code adaptation.
+ [Web Cifar Youtube channel](https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ) - Used for timeline code adaptation.
+ ["Love Running" footer code](https://github.com/Code-Institute-Solutions/love-running-2.0-sourcecode/tree/main/06-site-footer/02-footer-styling) - Footer adapted from this code.

### Acknowledgements

-	To the Code Institute course material, as the basis of all my knowledge is from here.
-	To the Slack community as I have used the different channels to find answers to problems!
-  Stack Overflow as a valuable resource for solving a couple of issues.
-  [W3schools](https://www.w3schools.com/) and [Stack Overflow](https://stackoverflow.com/) for general reference.

I would also like to thank to:

-	My mentor Rahul, for his time, support and guidance throughout our video calls.
-	My fiancée Maja, for all support and patience.
