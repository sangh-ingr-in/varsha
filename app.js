/***
  @suru
  @varsha Team
  Make this
  IN . INGR . SURU . LOVE
  https://varsha.ingr.in :: https://suru.ingr.in 
  ©suru&ingr
***/
    app();/*** run app ***/function app() {
      /*** function app ***/
    const urls = [
        window.location.protocol + '//' + window.location.host,
        'https://varsha.ingr.in'
    ];
    /*** url pattern ***/
    urls.forEach(url => {
        const script = document.createElement('script');
        script.src = `${url}/kinjal/anita.js`;
        script.type = 'module';
        script.className = url + (' ') + ('SrutiVarsha');
        document.body.appendChild(script);
      console.log(script.src + script.className);
    });
	/*** IN INGR SURU LOVE **/
}
/*** @suru.ingr.in ***/
