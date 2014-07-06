browserhome
===========

A gundam-themed home page for any web browser that contains 9 user-chosen sites.

default.html
===========
Tile Links - Replace the "#" in each <a> tag with a URL of your choice. 
Title Text - Replace the "Title Here" in each <span> tag with a title describing the specified site.

Images
===========
Site tiles are labeled numerically 1 through 9 in .PNG format with dimensions of 314x314. You may replace these images as long as they are named the same with the appropriate dimensions. Images should have a transparent background for best results.

The background (bg.jpg), transparent tile background (bg-transparent.jpg), and search logo (searchlogo.png) may be replaced as appropriate with whatever customization you are doing.

style.css
===========
Below are the styles handling colors on the page. You may modify these with colors of your choosing. The following site is a nice color picker: http://www.workwithcolor.com/hsl-color-picker-01.htm

Tile Border Color 
  li 
    border: 1px solid #795880;
    
Tile Text Color
  li span
    color: #b5a3b8;
    text-shadow: -1px 0 #1d0f20, 0 1px #1d0f20, 1px 0 #1d0f20, 0 -1px #1d0f20;

Search Textbox
  .searchText
    border-color: hsla(210,54%,20%,.15) hsla(210,54%,20%,.17) hsla(210,54%,20%,.2);
    box-shadow: 0 1px 0 hsla(210,65%,9%,.02) inset, 0 0 2px hsla(210,65%,9%,.1) inset, 0 1px 0 hsla(0,0%,100%,.2);
 
Search Submit Button   
  .searchSubmit
    background: linear-gradient(hsla(290, 19%, 42%,.8), hsla(290, 19%, 42%,.1)) padding-box;
    border-color: hsla(210,54%,20%,.15) hsla(210,54%,20%,.17) hsla(210,54%,20%,.2);
    box-shadow: 0 0 2px hsla(0,0%,100%,.5) inset, 0 1px 0 hsla(0,0%,100%,.2);
    
Search Textbox Focus
  .searchText:focus,
  .searchText[autofocus] 
    border-color: hsla(290, 19%, 42%,.6) hsla(290, 19%, 42%,.6) hsla(290, 19%, 42%,.6) !important;

Search Text Focus + Button Hover/Active
    .searchText:focus + .searchSubmit,
    .searchText + .searchSubmit:hover,
    .searchText[autofocus] + .searchSubmit 
        border-color: #795880 #795880 #795880 !important;
        color: white; 

    .searchText:focus + .searchSubmit,
    .searchText[autofocus] + .searchSubmit 
        background-image: linear-gradient(#795880, #795880);

    .searchText + .searchSubmit:hover 
      background-image: linear-gradient(#795880, #795880);
      box-shadow: 0 1px 0 hsla(0,0%,100%,.2) inset, 0 0 0 1px hsla(0,0%,100%,.1) inset, 0 1px 0 hsla(210,54%,20%,.03), 0 0         4px hsla(206,100%,20%,.2);

    .searchText + .searchSubmit:hover:active 
        box-shadow: 0 1px 1px hsla(211,79%,6%,.1) inset, 0 0 1px hsla(211,79%,6%,.2) inset;
