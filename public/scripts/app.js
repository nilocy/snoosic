console.log('app.js loaded...');

angular.module('SnoosicManager', []);

angular.module('SnoosicManager')
    .controller('SnoosicController', ['$scope','$sce', function($scope,$sce){

      $scope.searchQuery = "";
      $scope.makeHTML = $sce.trustAsHtml;
      $scope.urlBrackets = ["<iframe src='https://embed.spotify.com/?uri=spotify:trackset:"," id='widget' style='width: 400px; height: 360px;' frameborder='0' allowtransparency='true'></iframe>"];
      $scope.subreddits = [
        {
          name: "Music",
          url: "music",
          image: "http://i.imgur.com/uhExyAU.jpg",
          spotifyIDs:"42GP0xKtkolBnmqQRvSllO,4r5NuOfXDenScgcmGNHl7F,6XXxkAAmnrc1LI0HMP4tOj,61xWSI0W90N2GPHlQICzfc,6wmScqdQNBgJ4w6hrKPeeQ,5ZTZL5UlpF3UZ8H7BhoI9N,64Dlgk4d6JbiT8UoaHB4g0,6L89mwZXSOwYl76YXfX13s,3S4UylLzNzhk5WsseICPqg,7uuNMSqKxADmecc9vL8S3O,6eexMTriv6WOdYs6MaAylV,5ibeEI7Vq16f8dS1Gax1lI,769Gf7dDk9ChZrQIzt038b,6G7URf5rGe6MvNoiTtNEP7,2NMgVh5qaPprKTEzFe3501,2anWNTYGBxXDUmOFOiDh1b,45D0ixQWzXQOoU1S9aSnKk,2KFwKqq5N0BCplqwpppoCo,5kD9T7GForh8LnRz5ClbL8",
          spotifyURL: function(){return $scope.urlBrackets[0]+this.name +":"+this.spotifyIDs+$scope.urlBrackets[1]}
        },
        {
          name: "Indie Folk",
          url: "indiefolk",
          image: "http://i.imgur.com/8kJu3Hh.jpg",
          spotifyIDs:"3LHg768dEKqJKht2uPTlVR,7sh2lOTbbhfkAPx8e6xrB6,5lXbWuVMfrIuMMA4tcF3BW,24cOsWbxmW4yDpx0IQELTm,3oOhb0dEreWcX4L1dDhmi7,7u4b2YfUPPBWKGAhic6VUy,4c2Zdtqy5x9BkhTSJRTDmk,4yOBc7XFPVjzbiGuT1Tpm7,5TfuZganmkJ6idVGLRiL0g,2nnsYhEWzdUAljWEYzCgEQ,4QFgyUmI9G5GxNDFIcHhdN,1rZFC696WndvqvpFfjr4Wu,1cHqhEMVfxlJQHcrMgPMAj,05P7E96gMXAjFitjOHSnoF,5ElXcw1hOc7YNIeBBXTy4R,7AbNysr5k1gKLbPPRvyxAl,5VtyF6ie8ru3kc3Zj5W2Xp,1nV4htv9Kn914fP7m06lLP,3Odin1TMfqVn4zO1kn0WdP,4GpmgOiFG2WxiiXHthNkuz,3yIlWJynimebxrJyhtcWxs,2cANPIAhfRXHw9bPvcbfIP,37oT8H5SBRHUm0E9h6QdnD,1aj4GXfmEYXfdVZohCpNKu,4m66SsO0PNCAhHf2D4PojC",
          spotifyURL: function(){return $scope.urlBrackets[0]+this.name +":"+this.spotifyIDs+$scope.urlBrackets[1]}

        },
        {
          name: "Indie",
          url: "indie",
          image: "http://i.imgur.com/0wdvNqj.jpg",
          spotifyIDs:"0PiXZzaG3fqwHdEcr3bLqh,2dlnFycyki41VyHgPeRJhV,5rkPztN5ySYKkxIOBb4LAe,7gvjGJHT8gLLOGhQ1nM1B3,2JGSYOFs3qNgd4hhvhrkf8,3N4lTpD3Sg7WG7ZMdDLIeW,3uw5ieWvQrgQEcbPrWG7dg,77AP9QIp7yygbSxYHziVMJ,18RBTRs0NKPaCfTgGeLnsN,5AVeTGdMlGBQQyJtlcvc8c,7FLMvlW1Lo246V98ZeSOYU,1Q9ggh6y1w2kSOm9ocnMlx,2oNkHUjUwJ5i7XBe0LA6mh,3Ix8Z8CW3zXmaNCf3JUbvl,7AeEp1vBiHKvQSQuseVmlY,6fWMEDCURTkeP9bPYvzcJe",
          spotifyURL: function(){return $scope.urlBrackets[0]+this.name +":"+this.spotifyIDs+$scope.urlBrackets[1]}
        },
        {
          name: "90s Music",
          url: "90smusic",
          image: "http://i.imgur.com/BpjCyoZ.jpg",
          spotifyIDs:"7B3UAPLYAbwXVgbHSKEaTw,7lDIFkQ42fYS8InRKHjeOT,53968oKecrFxkErocab2Al,3PwA39O7NVcbydTp5FsUqX,1Z2V4eEy72U4wB741AbY9v,73hv99UTFaWv6K7ip0OrXp,1NfCcPkMOU7sRS8OMYvUXV,2vJtRGQtxkmZ0lM1HxPkaK,34NQbT6vqRmKeNl9BIds9o,6POg22mKRblbBTi5AW9jEW,06FEsounL5ggjTgO5uZ7GK,3UNpL0Z9e1yoi6Gm2Kx8n7",
          spotifyURL: function(){return $scope.urlBrackets[0]+this.name +":"+this.spotifyIDs+$scope.urlBrackets[1]}
        },
        {
          name: "Listen To This",
          url: "listentothis",
          image: "http://i.imgur.com/4iZEVv3.jpg",
          spotifyIDs:"3cTMtCrY00mTKuinlzElwC,191cOCuRmk63xDFQ27TDdu,7BaDRi8gmRnOducT6KaOfc,31ZoOPmUvgNW8MYSpcnhrl,69B68Pfllp2jTX9sKn2hH9,1eMoUsP9cYuSFffd0raY0a,0BByC6qwanFlzVqfV1kwRy,2JGSYOFs3qNgd4hhvhrkf8,1CGMbXotw37W2TGOc16Kdj,4tzgsfffxB7kXZ9xzMl64s,1gvMBt27zC5oyt5OErGduN,5rJjM5yEsz8tHryQodyZlf",
          spotifyURL: function(){return $scope.urlBrackets[0]+this.name +":"+this.spotifyIDs+$scope.urlBrackets[1]}
        },
        {
          name: "Tree Music",
          url: "treemusic",
          image: "http://i.imgur.com/RdpA4Oj.jpg",
          spotifyIDs:"6N9zd3kTDbfiEWeXK8j2l0,56HYxKJIfClkU3bMCRQ9r5,4jGAEpkUCrxjfORV9J9PmU,4HEoe555uqPiPRkCyhwlSe,3toxxSU3TcvzgmeR8LLUiX,4hbBTFHkE7p4pW3DCmJZ5O,3uaME0cwjo7XPV7p7gIe4l,6hBYyywtoYCdCZvwv6Mw3x,4ObmuuwkFypIg4dyXux0lY,3ueN9szC38HHk3dZqOdoyq,1t0MqM5NmkvDmruUzHeeUw,5PZ6UQkznLFrB7NR6gRg6q",
          spotifyURL: function(){return $scope.urlBrackets[0]+this.name +":"+this.spotifyIDs+$scope.urlBrackets[1]}

        }
      ]


      $scope.getUrl = function(){
          $('.modal-trigger').leanModal();
      }



    }]);

// Load Playlist for clicked box


  $(document).ready(function(){
    // getUrl();
    // cardHover();
    // cardLeave();

  });
