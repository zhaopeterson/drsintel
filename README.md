# This explains how I did things on this single-page site as an exercise for responsive layout and gulp/sass workflow.

### Workflow - gulp:
1. included compass so I can use the compass @reset and @font-face

### Using SVG 
1. Decided to use SVG as a background image -- which do not need to resize it (no Illustrator on personal computer), can just use the background-size to get the correct size.
2. There are enough headings (h1 and h2) on the page for SEO purposes, so do not have to use the logo as an image.
3. On mobile devices, the background approach can prevent users copying/saving the Intel logo, otherwise when user touch the image it will pop up a dialog box asking if the users what to save the images
4. Created white version and grey version of the logo svg files by simply changing the fill color using sublime text

### break-points
This particular layout, as provided in the mobile psd will not work in extremely narrow screen, so the default layout used a single column for the promo links. The minimum width I feel comfortable for using two column layouts is 565px. There are no high-res image provided by the psd for extremely large (or retina screens) so I think I set a max width 1440px for xLarge screens.
$small: 565px;
$medium: 992px;
$large: 1200px;
$xlarge: 1440px

### text and anchor link treatment
1. Improvised #fff as link a:hover color in the promo section
2. The footer link style mimic Intel.com
3. Letter spacing was added to promo h1 and header h2 to make it look more the psd. Still the web font looks a little fatter. Tried to achieve sharp effect by using:
text-rendering: optimizeLegibility;
did not seem to work
4. This might be an overkill, but fun to know can be done -- split text into two-line for promo h2,
<pre> 
<h2>Find information and services to <span>publish and manage digital content.</span></h2>
and use css generated content to add a “<br>”
</pre>
<pre>
.promo h2 span:before {
    content: ' \00000a';
    white-space: pre;
}
</pre>


### Layout
1. In the promo section, used the most conservative approach for the three boxes, no flex-box or multi-columns for fear of breaking down the page.
2. The two columns layout in the mobile view was achieved by using absolute positioning, not something I am proud of (added extra classes), but just feel more comfortable this way for browser compatibility concerns.
3. Height of those three boxes are explicitly set, for this layout no harm done as we know there are only 5 items.
4. Those SLITS ... to ensure it is fully responsive, used percentage for the boxes width, had to add an extra div (.item-inner-wrapper) to achieve the effect of slit ...

not too much a fan of calc(), it is expensive and always good to use fallback option:
could do something like this:
			.item-training {
				width: calc(40% - 2px);
				margin: 0 calc(30% - 1px) 0 calc(30% + 1px);
			}

--------- Alternatively we can use float to do the three boxes
box 1 float to left
box 2 float to right
box 3 static
(but still need to declare margin:0 auto, not sure how much better than the current approach)

### Images
1. There is a scrim (20% black) used in the psd, decided just merge them and export the image as a whole instead creating an extra div to have scrim on.
2. Only two set of images are used because only 2 psds are provided
3. I do not like to stretch the image, since the image are low res, I set a max-width of 1440 px, a gradient background is set on the content wrapper so for extremely wide screens the image is centered in the middle instead of cover whatever the screen width like intel.com

### Basic web accessibilities 
1. role
2. arial-label

### Browser compatibility 
1. The instruction said only use css responsive design, no js allowed, so did not use the html5shiv or Modernizr. so the page only supports modern browsers, no IE 6,7,8
2. The page is development using Chrome on MacOS. By sliding the browser window, the break points all look fine. I did test the page on limited devices I own (iPad4, iPhone, nexus, an old Samsung Galaxy)


##  ====== I do believe a good developer should communicating with designers about the potential pitfalls of a design. ===

** The psd should set the solution to 300 instead of the current 72?? this particular Jumbotron image is fuzzy probably by design, but for other HD devices usually need much 2-3 times of the original size.


** The hamburger menu is a jpeg with blue background, it will NOT look crisp on the mobile HD screens, so I generated the the hamburger with CSS, this approach will allow animating the hamburger to cross or arrow if needed using CSS animation.


!!!! There should be more designs for very narrow phone screen (portrait), tablet(landscape) and extremely wide screen. I implemented couple of layouts according to my own preference. e.g. For extremely narrow screen, the anchor text links should be just one column instead of two columns in the mobile psd (that one looks more like tablet view).

1. In the desktop wide screen view, the hamburger should be replaced by real navigation text links

2. The text anchor links in Desktop view is center align and with the right arrow next to it. I think will make localizations more challenging (same copy in German or Russia would be much longer). Without using Javascript it would be almost impossible to append the right arrow to the ellipsise text ...
we could get around this by generating a span tag next to the anchor tag like this
"<li><a href="#">Set up a website</a><span>RIGHR ARROW GOES HERE</span></li>"
3. In the mobile version the promo section first box is 156px second is 158px, should be consistent.