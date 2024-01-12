import axios from 'axios'

export const instance = axios.create({
	baseURL: 'https://api.kinopoisk.dev',
	headers: {
		'X-API-KEY': 'KJWQ4QD-H4WMRXX-GEEPGG3-GYXT4P0'
	}
})

export const baseAPI = {
	getFilms() {
		return instance.get<GetFilmsResponse>('/v1.4/movie')
	},
	getFilmById(id: string) {
		return instance.get<GetFilmByIdResponse>(`/v1.4/movie/${id}`)
	},
	getFilmByName(params: any) {
		return instance.get<GetFilmByNameResponse>(`/v1.4/movie/search`, params)
	},
	getParamsList(field: string) {
		return instance.get<GetParamsListResponse>(`/v1/movie/possible-values-by-field?field=${field}.name`)
	},
	getRandomFilm(genre: string[], country: string[]) {
		return instance.get<GetRandomFilmResponse>(`/v1.4/movie/random?genres.name=${genre}&countries.name=${country}`)
	},
	getFilmAwards() {
		return instance.get<GetFilmAwardsResponse>(`/v1.4/movie/awards`)
	},
	getSeasons() {
		return instance.get<GetFilmAwardsResponse>(`/v1.4/movie/season`)
	},
	getReviews() {
		return instance.get<GetReviewsResponse>(`/v1.4/movie/review`)
	},
	getActors() {
		return instance.get<GetActorsResponse>(`/v1.4/person/search`)
	}
}

export type Film = {
	id: number
	externalId: FilmExternalId
	name: string
	alternativeName: string
	enName: string
	names: FilmNames[]
	type: string
	typeNumber: number
	year: number
	description: string
	shortDescription: string
	slogan: string
	status: string
	rating: FilmRating
	votes: FilmVotes
	movieLength: number
	ratingMpaa: string
	ageRating: number
	logo: FilmLogo
	poster: FilmPoster
	backdrop: FilmBackdrop
	videos: FilmVideos
	genres: FilmGenres[]
	countries: FilmCountries[]
	persons: FilmPersons[]
	reviewInfo: FilmReviewInfo
	seasonsInfo: FilmSeasonsInfo[]
	budget: FilmBudget
	fees: FilmFees
	premiere: FilmPremiere
	similarMovies: FilmSimilarMovies[]
	sequelsAndPrequels: FilmSequelsAndPrequels[]
	watchability: FilmWatchability
	releaseYears: FilmReleaseYears[]
	top10: number
	top250: number
	ticketsOnSale: boolean
	totalSeriesLength: number
	seriesLength: number
	isSeries: boolean
	audience: FilmAudience[]
	lists: string[]
	networks: FilmNetworks[]
	updatedAt: string
	createdAt: string
	facts: FilmFacts[]
	imagesInfo: FilmImagesInfo
}
export type FilmExternalId = {
	kpHD: string
	imdb: string
	tmdb: number
}
export type FilmNames = {
	name: string
	language: string
	type: string
}
export type FilmRating = {
	kp: number
	imdb: number
	tmdb: number
	filmCritics: number
	russianFilmCritics: number
	await: number
}
export type FilmVotes = {
	kp: string
	imdb: number
	tmdb: number
	filmCritics: number
	russianFilmCritics: number
	await: number
}
export type FilmLogo = {
	url: string
}
export type FilmPoster = {
	url: string
	previewUrl: string
}
export type FilmBackdrop = {
	url: string
	previewUrl: string
}
export type FilmVideosTrailers = {
	url: string
	name: string
	site: string
	type: string
	size: number
}
export type FilmVideosTeasers = {
	url: string
	name: string
	site: string
	type: string
	size: number
}
export type FilmVideos = {
	trailers: FilmVideosTrailers[]
	teasers: FilmVideosTeasers[]
}
export type FilmGenres = {
	name: string
}
export type FilmCountries = {
	name: string
}
export type FilmPersons = {
	id: number
	photo: string
	name: string
	enName: string
	description: string
	profession: string
	enProfession: string
}
export type FilmReviewInfo = {
	count: number
	positiveCount: number
	percentage: string
}
export type FilmSeasonsInfo = {
	number: number
	episodesCount: number
}
export type FilmBudget = {
	value: number
	currency: string
}
export type FilmFeesWorld = {
	value: number
	currency: string
}
export type FilmFeesRussia = {
	value: number
	currency: string
}
export type FilmFeesUsa = {
	value: number
	currency: string
}
export type FilmFees = {
	world: FilmFeesWorld
	russia: FilmFeesRussia
	usa: FilmFeesUsa
}
export type FilmPremiere = {
	country: string
	world: string
	russia: string
	digital: string
	cinema: string
	bluray: string
	dvd: string
}
export type FilmSimilarMoviesRating = {
	kp: number
	imdb: number
	tmdb: number
	filmCritics: number
	russianFilmCritics: number
	await: number
}
export type FilmSimilarMoviesPoster = {
	url: string
	previewUrl: string
}
export type FilmSimilarMovies = {
	id: number
	rating: FilmSimilarMoviesRating
	year: number
	name: string
	enName: string
	alternativeName: string
	type: string
	poster: FilmSimilarMoviesPoster
}
export type FilmSequelsAndPrequelsRating = {
	kp: number
	imdb: number
	tmdb: number
	filmCritics: number
	russianFilmCritics: number
	await: number
}
export type FilmSequelsAndPrequelsPoster = {
	url: string
	previewUrl: string
}
export type FilmSequelsAndPrequels = {
	id: number
	rating: FilmSequelsAndPrequelsRating
	year: number
	name: string
	enName: string
	alternativeName: string
	type: string
	poster: FilmSequelsAndPrequelsPoster
}
export type FilmWatchabilityItemsLogo = {
	url: string
}
export type FilmWatchabilityItems = {
	name: string
	logo: FilmWatchabilityItemsLogo
	url: string
}
export type FilmWatchability = {
	items: FilmWatchabilityItems[]
}
export type FilmReleaseYears = {
	start: number
	end: number
}
export type FilmAudience = {
	count: number
	country: string
}
export type FilmNetworksItemsLogo = {
	url: string
}
export type FilmNetworksItems = {
	name: string
	logo: FilmNetworksItemsLogo
}
export type FilmNetworks = {
	items: FilmNetworksItems[]
}
export type FilmFacts = {
	value: string
	type: string
	spoiler: boolean
}
export type FilmImagesInfo = {
	postersCount: number
	backdropsCount: number
	framesCount: number
}

type ParamField = {
	name: string
	slug: string
}

type GetFilmsResponse = Film[]

type GetFilmByIdResponse = Film

type GetFilmByNameResponse = Film

type GetParamsListResponse = ParamField[]

type GetRandomFilmResponse = Film

export type GetFilmAwardsResponse = {
	docs: GetFilmAwardsResponseDocs[]
	total: number
	limit: number
	page: number
	pages: number
}
export type GetFilmAwardsResponseDocsNominationAward = {
	title: string
	year: number
}
export type GetFilmAwardsResponseDocsNomination = {
	award: GetFilmAwardsResponseDocsNominationAward
	title: string
}
export type GetFilmAwardsResponseDocs = {
	nomination: GetFilmAwardsResponseDocsNomination
	winning: boolean
	updatedAt: string
	createdAt: string
	movieId: number
}

export type GetSeasonsResponse = {
	docs: GetSeasonsResponseDocs[]
	total: number
	limit: number
	page: number
	pages: number
}
export type GetSeasonsResponseDocsEpisodesStill = {
	url: string
	previewUrl: string
}
export type GetSeasonsResponseDocsEpisodes = {
	number: number
	name: string
	enName: string
	description: string
	still: GetSeasonsResponseDocsEpisodesStill
	airDate: string
	enDescription: string
}
export type GetSeasonsResponseDocsPoster = {
	url: string
	previewUrl: string
}
export type GetSeasonsResponseDocs = {
	movieId: number
	number: number
	episodesCount: number
	episodes: GetSeasonsResponseDocsEpisodes[]
	poster: GetSeasonsResponseDocsPoster
	name: string
	enName: string
	duration: number
	description: string
	enDescription: string
	airDate: string
	updatedAt: string
	createdAt: string
}

export type GetReviewsResponse = {
	docs: GetReviewsResponseDocs[]
	total: number
	limit: number
	page: number
	pages: number
}
export type GetReviewsResponseDocs = {
	id: number
	movieId: number
	title: string
	type: string
	review: string
	date: string
	author: string
	authorId: number
	userRating: number
	updatedAt: string
	createdAt: string
}

export type GetActorsResponse = {
	docs: GetActorsResponseDocs[]
	total: number
	limit: number
	page: number
	pages: number
}
export type GetActorsResponseDocs1 = {}
export type GetActorsResponseDocsBirthPlace = {
	value: string
}
export type GetActorsResponseDocsDeathPlace = {
	value: string
}
export type GetActorsResponseDocsProfession = {
	value: string
}
export type GetActorsResponseDocs = {
	1: GetActorsResponseDocs1
	id: number
	name: string
	enName: string
	photo: string
	sex: string
	birthday: string
	death: string
	age: number
	birthPlace: GetActorsResponseDocsBirthPlace[]
	deathPlace: GetActorsResponseDocsDeathPlace[]
	profession: GetActorsResponseDocsProfession[]
	growth: number
}
