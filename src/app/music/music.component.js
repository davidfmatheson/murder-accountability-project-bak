"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var MUSICS = [
    {
        song: 'same-drugs',
        header: 'Chance The Rapper - Same Drugs',
        title: '"You were always perfect, and I was only practice"',
        text: 'What if you realized, early on, that I was just practice? I\'m sure that there are funny software developers out there who can also remember the kids\' appointments, and are expert gift-givers. I came to you emotionally undercooked 16 years ago, and you could have taken your talents elsewhere any time in those first 5 years. I hear this song and feel relieved that we still do the same drugs.',
        spotifyEmbed: 'https://open.spotify.com/embed/track/6m9qPYXmhge2QhBLfFKnVF'
    },
    {
        song: 'come-down-now',
        header: 'Passing Strange Ensemble - Come Down Now',
        title: '"I\'ve been thinking about leaving / My fingerprints on your being / It\'s like church now"',
        text: 'My god, I get so weepy during this number. It\'s the best articulation of the impact you have on me. There\'s a religious imprinting that has happened, some sort of brain-rewiring that causes me to talk, and act, and behave in a way that is infused with empathy.',
        spotifyEmbed: 'https://open.spotify.com/embed/track/3eMV1Uifvr9ok9D87m2Vnp'
    },
    {
        song: 'game-shows',
        header: 'The Mountain Goats - Game Shows Touch Our Lives',
        title: '"Shadows crawled across the living room\'s length / I held on to you with a desperate strength"',
        text: 'I have this vision of lounging around Saturday afternoons and wrestling you to stay on the couch with me, to do nothing together. This is really about building a decades-long relationship, though. Every day you renew my desperation.',
        spotifyEmbed: 'https://open.spotify.com/embed/track/6GbOE6jRrtTuFVOz4gaHKz'
    },
    {
        song: 'florida',
        header: 'The-Dream - Florida University',
        title: '"What rhyme with asshole? / ASSHOLE"',
        text: 'You thought it was going to be all sad-sack music? This song\'s lyrics are aggresively bad, but they\'re also goofy, and we both giddily laugh when it pops up on my old mix CDs. It also helps that it has a huge catchy riff running through it. I want to make a whole genre out of stupid-lyric songs that make you laugh. I hope, when we get old, that we got food everywhere, as if the party was catered.',
        spotifyEmbed: 'https://open.spotify.com/embed/track/2WRFQjbQynfOOndqW9M6rU'
    },
    {
        song: 'vampires',
        header: 'Jason Isbell - If We Were Vampires',
        title: '"It\'s not your hands searching slow in the dark / Or your nails leaving love\'s watermark"',
        text: 'For a tune centered around the mortality of their relationship, there are surprising elements of love, tenderness and joy in there. 40 years sounds like such a long time, but then I realize we\'re more than a third of way there! ',
        spotifyEmbed: 'https://open.spotify.com/embed/track/250RLekaiL1q9qZer975Eg'
    },
    {
        song: 'rock-bottom',
        header: 'Modern Baseball - Rock Bottom',
        title: '"There\'s no good reason why I should leave your bed tomorrow / We can watch planet earth and brainstorm tattoos"',
        text: 'There are some days where I think if I didn\'t have kids or a job, I would have no reason to leave your bed.',
        spotifyEmbed: 'https://open.spotify.com/embed/track/2fz0ZdAu8kcqdXQ3IuN3YP'
    },
];
var MusicComponent = (function () {
    function MusicComponent(sanitizer, router, route) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.route = route;
    }
    MusicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) { return _this.music = MUSICS.find(function (music) { return music.song === params['song']; }); });
    };
    return MusicComponent;
}());
MusicComponent = __decorate([
    core_1.Component({
        selector: 'music',
        templateUrl: './music.component.html',
        styleUrls: ['./music.component.css']
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer,
        router_1.Router,
        router_1.ActivatedRoute])
], MusicComponent);
exports.MusicComponent = MusicComponent;
//# sourceMappingURL=music.component.js.map