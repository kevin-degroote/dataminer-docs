function initSearch() {
  createSearchResultsNewHtml();
  initEventHandlersCloseOpenSearch();

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context.target.value, args);
    };
};

  function createSearchResultsNewHtml()
  {
	var searchBox = document.getElementById("search-input")
	searchBox.addEventListener("keyup", debounce(search, 250));
  }
  
  function getTitle(str) {
    const endsWith = "| DataMiner Docs"

    if (str.length >= endsWith.length) {
      const lastIndex = str.lastIndexOf(endsWith);
      if (lastIndex === (str.length - endsWith.length)) {
        // strings ends with endsWith
        return str.slice(0, lastIndex);
      }
    }
    return str;
  }

  function getUrl(str) {
    // example url: "https://docshelp.blob.core.windows.net/docs/user-guide/Advanced_Functionality/DataMiner_Systems/DataminerSystems.html"
    const startsWith = "https://docshelp.blob.core.windows.net/docs/"

    if (str.startsWith(startsWith)) {
      return `https://docs.dataminer.services/${str.substring(startsWith.length)}`;
    }
    return str;
  }

  function initEventHandlersCloseOpenSearch() {

	var newSearchBox = document.getElementById("new-search-btn");

	newSearchBox.addEventListener("click", (event) => {
      showSearch(true);
      document.getElementById('search-input').focus();
    });

    //attach a click handler to the close icon
	var searchCloseButton = document.getElementById("search-close-btn");
	searchCloseButton.addEventListener("click", (event) => {
      showSearch(false);
      clearResults();
      clearSearchInput();
    });
  }

  function search(e) {
	  var searchTerm = e.target.value;
    if (searchTerm.length) {
      doGetHttpRequest(searchTerm);
    } else {
      clearResults();
    }
  }

  function doGetHttpRequest(searchTerm) {
    var url = `https://docs-srch.search.windows.net/indexes/docs-blob-index2/docs/search?api-version=2021-04-30-Preview&api-key=5630827C003AFD513AA4D8D21A0A79B7`;
    var searchTermEnhanced = searchTerm;
    var pattern = /[a-zA-Z]$/;
    if (pattern.test(searchTermEnhanced)) {
      searchTermEnhanced += "*";
    }
    var body= '{"search": \'' + searchTermEnhanced + '\',"searchMode": "all","queryType": "full","top": 200}';
	
	let xhr = new XMLHttpRequest()
xhr.onload = function () {
    if(xhr.status === 200) {
        processSearchResults(JSON.parse(xhr.responseText), searchTerm);
    }
}
xhr.onerror = () => {
  clearResults();
  addHtmlToResultElement('<p>Unsupported search query.</p>');
};
xhr.open('POST', url, true)
xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
xhr.send(body);	
  }

  function clearResults() {
    document.getElementById("search-result-items").innerHTML = "";;
  }

  function clearSearchInput() {
	document.getElementById('search-input').value = '';
  }

  function addHtmlToResultElement(html) {
    const resultElement = document.getElementById("search-result-items");
    //resultElement.append(html);
	resultElement.innerHTML += html;
  }

  function processSearchResults(data, searchTerm) {
    clearResults();

    if (!data.value || data.value.length < 1) {
      addHtmlToResultElement('<p>No results found.</p>')
    } else {
      const html = [];

      for (const result of data.value) {
        if (result.metadata_storage_name !== "toc.html" && result.metadata_title !== null) {
          // results with toc.html files (table of contents) + without title are skipped
          const title = getTitle(result.metadata_title);
          const url = getUrl(result.storage_path);
          const htmlString = `<div class="result"><a href="${url}?q=${encodeURIComponent(searchTerm)}"><div class="url">${url}</div><div class="title">${title}</div></a></div>`;
          html.push(htmlString)
        }
      }

      addHtmlToResultElement(html.join(''))
    }
  }

  function showSearch(showSearch) {
	var mainElement = document.getElementsByTagName("main");
	var serachResults = document.getElementById('search-results-new');
    if (showSearch)
	{
	  document.getElementById("main").style.display = "none";
	  serachResults.style.display = "block";
    } else {
	  document.getElementById("main").style = null;
      serachResults.style.display = "none";
    }
  }
}