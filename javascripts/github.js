var github = (function(){
  function escapeHtml(str) {
    return $('<div/>').text(str).html();
  }
  function render(target, repos){
    var i = 0, fragment = '', t = $(target)[0];

    for(i = 0; i < repos.length; i++) {
      fragment += '<li><a href="'+repos[i].html_url+'">'+repos[i].name+'</a><p>'+escapeHtml(repos[i].description||'')+'</p></li>';
    }
    t.innerHTML = fragment;
  }
  return {
    showRepos: function(options){
      render(options.target, [
        { html_url: 'https://github.com/appcelerator/alloy', name: 'Alloy', description: 'Titanium-based MVC framework for developing cross-platform applications' },
        { html_url: 'https://github.com/appcelerator/hyperloop', name: 'hyperloop', description: 'Write Javascript, get native code for anything' },
        { html_url: 'https://github.com/tonylukasavage/triple', name: 'triple', description: 'REPL for Titanium' },
        { html_url: 'https://github.com/tonylukasavage/ti-mocha', name: 'ti-mocha', description: 'Mocha test support for Appcelerator Titanium' },
        { html_url: 'https://github.com/tonylukasavage/ti-commonjs', name: 'ti-commonjs', description: 'node.js-style commonjs implementation for Titanium 3.X' },
        { html_url: 'https://github.com/tonylukasavage/tiapp.xml', name: 'tiapp.xml.js', description: 'Titanium tiapp.xml parsing and manipulation API' },
        { html_url: 'https://github.com/tonylukasavage/grunt-titanium', name: 'grunt-titanium', description: 'grunt plugin for Titanium CLI' },
        { html_url: 'https://github.com/tonylukasavage/grunt-alloy', name: 'grunt-alloy', description: 'grunt plugin for Titanium Alloy framework' }
      ]);
    }
  };
})();
