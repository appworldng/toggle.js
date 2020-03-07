# toggle.js

A simple JavaScript input toggle control.

<script type="text/javascript" src="toggle.js">
<input type="toggle">

## NPM
You can install directly via NPM to your project folder.
```
npm install input-toggle-js
```

## CDN
The CDN is updated after the release is made public. Always, check the GitHub page for the latest release.
<ul>
  <li>
    <a href="https://cdn.jsdelivr.net/gh/chigozieorunta/toggle.js/toggle.css">
      https://cdn.jsdelivr.net/gh/chigozieorunta/toggle.js/toggle.css
    </a>
  </li>
  <li>
    <a href="https://cdn.jsdelivr.net/gh/chigozieorunta/toggle.js/toggle.js">
      https://cdn.jsdelivr.net/gh/chigozieorunta/toggle.js/toggle.js
    </a>
  </li>
</ul> 

### Usage
Add a toggle control to your web pages easily by simply including an input element with type attribute as **toggle** like so:

```
<input type="toggle">
```

### States (On & Off)
The default state for the toggle is **Off** (0). You can also set a default state by adding a value to the value attribute like so.

```
<input type="toggle" value="1">
```

If you set a non-zero value, the state defaults to an On state:

### Forms
You can add your toggle button pretty much the way you would with any other input control into your form like so:

```
<form>
  <input type="toggle" name="mytoggle">
</form>
```
