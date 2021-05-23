import { TWP_INFO, YK_INFO, DLP_INFO } from "../constants"

export const TAGS = [{ name: "I AM THE MAN WHO KNOCKS" }, { name: "HE IS " }, { name: "SHE ARE" }, { name: "MACHINE learning is the best thing ever" }, { name: "artificial intelligence" }, { name: "I wish I could be the one who knocks" }, { name: "HERE ARE THE THINGS " }, { name: " THE BOY WHO WAITS " }]

export const QUICK_LINKS = [
    {
        "id": "1",
        "name": "Two Minute Paper",
        "link": "https://www.youtube.com/c/K%C3%A1rolyZsolnai/videos",
        "desc": TWP_INFO,
        "img": "tmp.jpg"
    }, {
        "id": "2",
        "name": "Yannic Kilcher",
        "link": "https://www.youtube.com/c/YannicKilcher/videos",
        "desc": YK_INFO,
        "img": "yk.jpg"
    }, {
        "id": "3",
        "name": "Artificial Intelligence & Deep Learning",
        "link": "https://www.facebook.com/groups/107107546348803",
        "desc": DLP_INFO,
        "img": "dlp.jpg"
    }
]

export const DUMMY_PAPER = [{
    datasets: "https://linkedin.com",
    id: "1",
    title: "Attention is all you need",
    tags: [{ name: "Here I go" }, { name: "machine learning" }, { name: "Here I go" }, { name: "machine learning" }, { name: "Here I go" }, { name: "machine learning" }],
    abstract: "DoubleML is an open-source Python library implementing the double machine learning framework of Chernozhukov et al. (2018) for a variety of causal models. It contains functionalities for valid statistical inference on causal parameters when the estimation of nuisance parameters is based on machine learning methods. The object-oriented implementation of DoubleML provides a high flexibility in terms of model specifications and makes it easily extendable. The package is distributed under the MIT license and relies on core libraries from the scientific Python ecosystem: scikit-learn, numpy, pandas, scipy, statsmodels and joblib. Source code, documentation and an extensive user guide can be found at this https URL and this https URL.",
    link: "https://arxiv.org/abs/1804.02767",
    codes: [{
        link: "https://youtube.com",
        language: "tensorflow"
    }],
    meta: "6 pages, 2 figures",
    publishedDate: new Date().toUTCString(),
    authors: [{ 'name': 'Philipp Bach' }, { 'name': ' Victor Chernozhukov' }, { 'name': ' Malte S. Kurz' }, { 'name': ' Martin Spindler' }, { 'name': 'Philipp Bach' }, { 'name': ' Victor Chernozhukov' }, { 'name': ' Malte S. Kurz' }, { 'name': ' Martin Spindler' }
    ],
    slug: "attention-is-all-you-need"
},
{
    id: '2',
    title: "Attention is all you need",
    tags: [{ name: "Here I go" }],
    abstract: "This is abstract aksdjlkasdkakjsldkjlasdjkladslkjadsljklja sdklkjasdkasljdl askdlkasdjlkasldkjaslkjdlaskjdjlasdkjasljdk  a sdkk dalskjl adsj ads adslkja dsljkad sjlka sdjklaljks dlkjad sljk dsjlka dsa s",
    link: "https://facebook.com",
    codes: [{
        link: "https://youtube.com",
        language: "tensorflow"
    }],
    meta: "6 pages, 2 figures",
    authors: [{ 'name': 'Philipp Bach' }, { 'name': ' Victor Chernozhukov' }, { 'name': ' Malte S. Kurz' }, { 'name': ' Martin Spindler' }],
    publishedDate: new Date().toUTCString(),
    slug: "attention-is-all-you-need"
}
];

export const DUMMY_FEED = [
    {
        "id": '1',
        userImage: "https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/185941212_3989895934423718_3710951625450892807_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=lHvsLUzEsAkAX9PWZC_&_nc_ht=scontent.fktm3-1.fna&oh=8f1952a9fa7fc2f628d4161d92f4dc48&oe=60C4D63F",
        time: "2021/10/30",
        user: "SG",
        tags: [{ name: "ml" }, { name: "THE PLACE IS CALLED DHULIKHEL" }, { name: "ai" }],
        isOwner: false,
        text: "<p>The boy who did it <b>I AM THE ONE WHO KNOCKED!!!</b> </p>",
        slug: "pca-explained"

    }, {
        "id": '2',
        userImage: "https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/185941212_3989895934423718_3710951625450892807_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=lHvsLUzEsAkAX9PWZC_&_nc_ht=scontent.fktm3-1.fna&oh=8f1952a9fa7fc2f628d4161d92f4dc48&oe=60C4D63F",
        time: "2021/10/30",
        user: "Gautam",
        tags: [{ name: "ml" }, { name: "ai" }],
        isOwner: true,
        text: `<p>Hello World</p><h1>Goodbye World</h1>`,
        slug: "attention-paper"
    }, {
        "id": '3',
        userImage: "https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/185941212_3989895934423718_3710951625450892807_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=lHvsLUzEsAkAX9PWZC_&_nc_ht=scontent.fktm3-1.fna&oh=8f1952a9fa7fc2f628d4161d92f4dc48&oe=60C4D63F",
        time: "2021/10/30",
        user: "Gautam",
        tags: [{ name: "ml" }, { name: "ai" }],
        isOwner: true,
        text: `<p>Hello World</p><h1>Goodbye World</h1>`,
        slug: "machine-learning-douchebag"
    }

]

export const DUMMY_COMMENTS = [
    { text: "<p>The CSS <code>background-color</code> property defines the background color of an element.</p>", isOwner: true, hasVoted: false, hasBookmarked: false, votes: 12345 },
    { text: `<p>The CSS <code>background-color</code> property defines the background color of an element.  <img alt="" src="/logo.png" / ></p>`, isOwner: false, hasVoted: true, hasBookmarked: true, votes: 156 },
    {
        text: `<h2>HTML Buttons</h2>
<p>HTML buttons are defined with the button tag:</p>
<button>Click me</button>`, isOwner: true, hasVoted: true, hasBookmarked: true, votes: 6454654
    },
]

export const DUMMY_RESOURCES = [
    { type: "A", url: "https://audile.tech/" },
    { type: "V", url: "https://www.youtube.com/watch?v=50nlLm9Gmug" },
    {
        type: "T", url: "https://www.typescriptlang.org/docs/handbook/advanced-types.html"
    }
]