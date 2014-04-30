var testKey = 'qeTest', storage = window.sessionStorage;
try { // Try and catch quota exceeded errors
   storage.setItem(testKey, '1');
   storage.removeItem(testKey);
}
catch (error) {
   alert('You are in Private Browsing mode. Please disable private browsing to view this content.');
}



    // "<script type='text/javascript'>"+
    //     "var testKey = 'qeTest', storage = window.sessionStorage;"+ 
    //     "try { // Try and catch quota exceeded errors"+ 
    //         "storage.setItem(testKey, '1');"+ 
    //         "storage.removeItem(testKey);"+
    //     "}"+
    //     "catch (error) {"+
    //         "alert('You are in Private Browsing mode. Please disable private browsing to view this content.');"+
    //     "}"+
    // "</script>"+