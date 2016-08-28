# This exaplains how I did things on this single-page site.

## workflow - gulp:
1. included compass so I can use the compass @reset and @font-face

## Using svg 
1. decide to use svg as a background image which do not need to resize it, can just use the backgroud-size to get the correct size.
2. There are enough headings on the page for SEO purposes so do not need to use the logo as an img.
3. For mobile users can prevent them copying the svg, otherwsie when user touch the image it will pop up a dialog box asking if the users what to save the images
4. Created white version and grey version of the logo svg files simply changed the fill color using sublime text

## break-points
1. There should be more designs for very narrow phone screen, tablet and extremely wide screen. I implemented couple of layouts according to common sense. e.g. For extremeely narrow screen, the anchor text links should be just one column instead of two columns in the psd.


## text and anchor link treatment
1. Since the design did not specific the hover color, just used white for the promo links (which makes sense from a design perspective)
2. The footer link color also obtained from Intel.com
3. Did add letter spacing for the h1 tag in jumbotrom section. (value obtained from Intel.com) make it look more the psd. Still the web font looks a little fatter.
text-rendering: optimizeLegibility;
Those only works on chrome,not seeing Intel.com doing it so omit it for now.
4. Spliting text into two line, the mobile layout in site I build did not split the text exactly lie the mock up.



## Layout
1. In the promo section, used the most conservative approach for the three boxes, no flex-box or multi-columns for fear of breaking down the page.
2. Similar here, The two columns layout in the mobile view was achieved by using absolute positioning, not something I am proud of (added extra classes), but think it is safer.
3. Height of those three boxes are explicitly set, for this layout no hard done as we know there are only 5 items, not like we are exporting a list out of an API, not sure how many of them are -- in that case to make the boxes equal height we might have to use js.
4. Those SLITS ... to ensure it is fully responsive, used percentage for the boxes width, had to add an tra div (.item-inner-wrapper) to achieve the effect of slit ...

not too mcuh a fan of calc(), it is expensive and always good to use fallback option
could do something like this:
			.item-training {
				width: calc(40% - 2px);
				margin: 0 calc(30% - 1px) 0 calc(30% + 1px);
			}

!!! Alernatively we can use float to do the three boxes
box 1 float to left
box 2 float to right
box 3 static (but still need to decalare margin:0 auto, not sure how much better this approach is)


## Images
1. There is a scrim (20% black) used in the psd, decided just merge them and export the image as a whole instead creating an extra div to have scrim on.
2. Onl two set of images are used because only 2 psds are provided
3. I do not like to stetch the image, since the image are low res, I set a max-width of 1440 (instead of using another set of , this caused I used a lot of the inner wrappers on each section so the content width do not go over 1440px, a gradien background is set on the content wrapper so for extremely wide screens the image is centered in the middle instead of cover whatever the screen width it is like on intel.com

## Browser compatibility 
1. The instruction said only css responsive design, no js allowed, so did not use the html5shiv or modernir.
so the page only supports mordern browsers, no IE 6,7,8


# ============ I think the design has problems,
 ====== I do believe a good developer should communicating with deigners about the potential pitfalls of a design.

** The psd should set the solution to 300 instead of the current 72?? this particular jumbotron image is fuzzy probably by design, but for other HD devices usually need much 2-3 times of the original size.


** The hamburger menu is a jpeg with bluebackground,it will NOT look crisp on the mobile HD screens, so i generated the the hamburger with CSS, this approach will allow animating the hamburge to cross or arrow if needed using CSS animation.

1. In the desktop wide screen view, the hamberger should be replaced by real navigation text links
2. The text anchor links in Desktop view is center align and with the right arrow next to it. I think will make localizations more challeging (same copy in German or Russia would be much longer). Without using javascript it would be almost impossible to append the right arrow to the ellipsised text ...
we could get around this by generating a span tag next to the anchor tag like this
<li><a href="#">Set up a website</a><span>RIGHR ARROW GOES HERE</span></li>
3. In the mobile version the promo section first box is 156px second is 158px, should be consistent.


##======== things should to do -- add web accessibilities ... but this is an exercise for responsive design/workflow, do not want to add extra markups ... and kind of running out of time
