import React from 'react';
function AddressMap(){
    return (
        <div className="google-map-code">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1917.1106875908558!2d108.23358372539015!3d16.053998098163916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219d706bc6bdf%3A0xbc60278e545b10c5!2zMTcgTmd1eeG7hW4gVGhp4bq_cCwgQW4gSOG6o2kgVMOieSwgU8ahbiBUcsOgLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1649786748733!5m2!1svi!2s" 
                title='Map to Regen' width="100%" height="400px" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
 }
export default AddressMap;