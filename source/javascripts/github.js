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
        { html_url: 'https://github.com/tonylukasavage/ti-mocha', name: 'ti-mocha', description: 'Mocha test support for Appcelerator Titanium' },
        { html_url: 'https://github.com/appcelerator/hyperloop', name: 'hyperloop', description: 'Write Javascript, get native code for anything' },
        { html_url: 'https://github.com/tonylukasavage/jsstl', name: 'jsstl', description: 'Parse and render STL files in pure Javascript' }
      ]);

      // $.ajax({
      //     url: "https://api.github.com/users/"+options.user+"/repos?callback=?"
      //   , type: 'jsonp'
      //   , error: function (err) { $(options.target + ' li.loading').addClass('error').text("Error loading feed"); }
      //   , success: function(data) {
      //     var repos = [];
      //     if (!data || !data.data) { return; }
      //     for (var i = 0; i < data.data.length; i++) {
      //       if (options.skip_forks && data.data[i].fork) { continue; }
      //       repos.push(data.data[i]);
      //     }
      //     repos.sort(function(a, b) {
      //       var aDate = new Date(a.pushed_at).valueOf(),
      //           bDate = new Date(b.pushed_at).valueOf();

      //       if (aDate === bDate) { return 0; }
      //       return aDate > bDate ? -1 : 1;
      //     });

      //     if (options.count) { repos.splice(options.count); }
      //     render(options.target, repos);
      //   }
      // });
    }
  };
})();
