const quotes = [
    {author: 'Oscar Wilde', 
     quote: `Be yourself; everyone else is already taken.`
    },
    {author: 'Marilyn Monroe', 
     quote: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`
    },
    {author: 'Albert Einstein', 
     quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`
    },
    {author: 'Frank Zappa', 
     quote: `So many books, so little time.`
    },
    {author: 'Marcus Tullius Cicero', 
     quote: `A room without books is like a body without a soul.`    
    },
    {author: 'Mae West', 
     quote: `You only live once, but if you do it right, once is enough.`
    },
    {author: 'Mahatma Gandhi', 
     quote: `Be the change that you wish to see in the world.`
    },
    {author: 'Robert Frost', 
     quote: `In three words I can sum up everything I've learned about life: it goes on.`
    },
    {author: 'Mark Twain', 
     quote: `If you tell the truth, you don't have to remember anything.`
    },
];

function generateQuote(){
    var random = Math.trunc(Math.random() * quotes.length + 1 );

    document.getElementById('authorOutput').innerHTML = '<i class="fa-regular fa-pen-to-square px-3 text-dark"></i>' + quotes[random].author;  
    document.getElementById('quoteOutput').innerHTML = quotes[random].quote;
}

