import React from 'react';
import ReactDOM from 'react-dom';

const topnav = (<div>><div class="topnav">
<div class="box">
    <a class="button" href="#popup1">SETTINGS</a>
</div>
</div>
<div id="topnav"></div>
<div id="popup1" class="overlay">
<div class="popup">
    <h2>SETTINGS</h2>
    <a class="close" href="#">&times;</a>
    <div class="content">
        testi
    </div>
</div>
</div>
<div class="footer">
<p>MADE BY GROUP 6 - DESIGN BY HILTAR</p>
</div>
</div>
);

ReactDOM.render(topnav, document.getElementById('topnav'));