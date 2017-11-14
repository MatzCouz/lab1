angular.module("webMusicas", []);
angular.module("webMusicas").controller("webMusicasController", function($scope){
	
	$scope.app = "Web Musicas";
	$scope.artistas = [];
	$scope.musicas = [];
	$scope.albums = [];
	$scope.playlists = [];


	$scope.listaMusicas = [];


	$scope.novaMusica = {};
	$scope.openArtistas = false;
	$scope.openAlbum = "";
	
	$scope.adicionarMusica = function(novaMusica){
		var musicaExiste = false;
		var artistaExiste = false;
		angular.forEach($scope.musicas, function(musicaLista){
			if(musicaLista.album == novaMusica.album){
				musicaExiste = true;
			}
		})
		angular.forEach($scope.artistas, function(artista){
			if(artista.nome == novaMusica.artista){
				artistaExiste = true;
			}
		})
		if(!artistaExiste){
			alert('Artista nao existe');
		}
		else if(musicaExiste){
			alert('Musica ja existe');
		}else{
			var novoAlbum = {
				nome: novaMusica.album,
				artista: novaMusica.artista
			};
			$scope.musicas.push(novaMusica);
			$scope.albums.push(novoAlbum);
			$scope.novaMusica = {};
		}
	}

	$scope.adicionarArtista = function(novoArtista){
		var existe = false;
		angular.forEach($scope.artistas, function(artista){
			if(novoArtista == artista.nome){
				existe = true;
				return;
			}
		})
		if(existe){
			alert('Artista ja existe');
		}else{
			var pushArtista = {
				nome: novoArtista,
				favorito: false
			};
			$scope.artistas.push(pushArtista);
			alert('certo');
		}
	}
	
	$scope.adicionarArtistaFavorito = function(artistaFavorito){
		angular.forEach($scope.artistas, function(artista){
			if(artistaFavorito == artista.nome){
				artista.favorito = true;
			}
		})
	}

	$scope.adicionarPlaylist = function(novaPlaylist){
		var existe = false;
		angular.forEach($scope.playlists, function(playlist){
			if(novaPlaylist == playlist.nome){
				existe = true;
				return;
			}
		})

		if(existe){
			alert('Playlist ja existe');
		}else{
			var pushPlaylist = {
				nome: novaPlaylist,
				musicas: []
			}
			$scope.playlists.push(pushPlaylist);
		}
	}


	$scope.listarAlbums = function(nomeArtista){
		$scope.openArtistas = true;
		$scope.openAlbum = nomeArtista;
	}

	
	$scope.listarMusicas = function(nomeMusica){
		angular.forEach($scope.musicas, function(musica){
			if(musica.nome == nomeMusica){
				$scope.listaMusicas.push(musica);
			}
		})
	}

	$scope.removerArtistaFavorito = function(nomeArtista){
		angular.forEach($scope.artistas, function(artista){
			if(artista.nome == nomeArtista){
				artista.favorito = false;
			}
		})
	}

	$scope.musicaAddPlaylist = {};
	$scope.exibirPlaylist = false;


	$scope.musicasPlaylist = "";
	$scope.exibirMusica = false;

	$scope.exibirMusicasPlaylists = function(playlistNome){
		$scope.exibirMusica = true;
		$scope.musicasPlaylist = playlistNome;
	}


	$scope.exibirPlaylists = function(musica){
		$scope.musicaAddPlaylist = musica;
		$scope.exibirPlaylist = true;
	}

	$scope.adicionarNaPlaylist = function(musica, addPlaylist){
		var existe = false;
		angular.forEach($scope.playlists, function(playlist){
			if(playlist == addPlaylist){
				angular.forEach(playlist.musicas, function(musicaPlaylist){
					if(musicaPlaylist == musica){
						existe = true;
					}
				})
					if(!existe){
						playlist.musicas.push(musica);
						alert('Adicionado com sucesso');
					}	
			}
		})

		if(existe){
			alert('Musica ja existe na playlist');
		}
	}

	$scope.removerMusicaPlaylist = function(musica, playlist){
				playlist.musicas.pop(musica);
	}

	$scope.removerPlaylist = function(playlist){
		$scope.playlists.pop(playlist);
	}

	$scope.removerMusica = function(musica){
		$scope.musicas.pop(musica);
	}
	
});