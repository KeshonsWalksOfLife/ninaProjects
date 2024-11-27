const zodiacSigns = [
    {
        sign: "Aries",
        startDate: "03-21",
        endDate: "04-19",
        wisdom: "Your courage is your compass. Trust in your fiery determination to overcome any challenge.",
    },

    {
        sign: "Taurus", startDate: "04-20", endDate: "05-20", wisdom: "Patience is your strength. Through persistence, you will unlock the treasure of life."
    },
    
    {
        sign: "Gemini", startDate: "05-21", endDate: "06-20", wisdom: "Your duality is a gift. Embrace your curiosity and let your adaptability leads to new adventures"
    },
    {
        sign: "Cancer", startDate: "06-21", endDate: "07-22", wisdom: "Your intuition is your anchor. Trust your emotions to navigate the stormy seas of life."
    },
    {
        sign: "Leo", startDate: "07-23", endDate: "08-22", wisdom: "You shine like the sun. Lead with your heart and inspire others with your passion."
    },
    {
        sign: "Virgo", startDate: "08-23", endDate: "09-22", wisdom: "Your precision is your power. Focus on the details to turn chaos into order."
    },
    {
        sign: "Libra", startDate: "09-23", endDate: "10-22", wisdom: "Balance is your strength. Seek harmony, and you'll discover the truth within yourself and others."
    },
    {
        sign: "Scorpio", startDate: "10-23", endDate: "12-21", wisdom: "Your intensity is transformative. Embrace the depths of your soul to uncover hidden truths."
    },

    {
        sign: "Sagittarius", startDate: "11-22", endDate: "12-21", wisdom: "Your quest for knowledge is endless. Let your adventurous spirit guide you to new horizons."
    },
    {
        sign: "Capricorn", startDate: "12-22", endDate: "01-19", wisdom: "Your discipline is unmatched. Climb every mountain with patience and perseverance."  
    },
    {
        sign: "Aquarius", startDate: "01-20", endDate: "02-18", wisdom: "Your innovation is inspiring. Think outside the box and create a world of possibilities."
    }, 
    {
        sign: "Pisces", startDate: "02-19", endDate: "03-20", wisdom: "Your empathy is profound. Dive into the ocean of your imagination to uncover the beauty of life."
    },
];

// Tarot Cards Data
const tarotCards = [
    { sign: "Aries", card: "The Fool", meaning: "A new journey awaits—step forward with faith." },
    { sign: "Taurus", card: "The Hierophant", meaning: "Seek wisdom through tradition and guidance." },
    { sign: "Gemini", card: "The Lovers", meaning: "Your choices will shape the connections around you." },
    { sign: "Cancer", card: "The Moon", meaning: "Trust your intuition to uncover hidden truths." },
    { sign: "Leo", card: "The Sun", meaning: "Success and joy are within your grasp." },
    { sign: "Virgo", card: "The Hermit", meaning: "Take time to reflect and discover your inner light." },
    { sign: "Libra", card: "Justice", meaning: "Fairness and balance will lead to clarity." },
    { sign: "Scorpio", card: "Death", meaning: "Endings bring new beginnings—embrace transformation." },
    { sign: "Sagittarius", card: "Temperance", meaning: "Patience and balance will bring harmony to your path." },
    { sign: "Capricorn", card: "The Devil", meaning: "Free yourself from the chains that bind you." },
    { sign: "Aquarius", card: "The Star", meaning: "Hope and inspiration will guide your journey." },
    { sign: "Pisces", card: "The High Priestess", meaning: "Listen to your intuition—it holds the key to wisdom." },
  ];
  

  function getZodiacSign(birthday) {
    const monthDay = birthday.slice(5);

    for(const zodiac of zodiacSigns) {
        if (monthDay >= zodiac.startDate && monthDay <= zodiac.endDate) {
            return zodiac;
        }
    }

    const capricorn = zodiacSigns.find(z => z.sign === "Capricorn");
    if(monthDay >= capricorn.startDate || monthDay <= capricorn.endDate) {
        return capricorn;
    }

    return null;
  }

  function getTarotCard(zodiacSign) {
    return tarotCards.find(card => card.sign === zodiacSign);
  }

  function showZodiacAndTarotWisdom() {
    const name = document.getElementById ("name").value;
    const birthday = document.getElementById("birthday").value;

    if (!name || !birthday) {
        document.getElementById("output").innerHTML = "<p>Please provide both your name and birthday!</p>"
        return;
    }

    const zodiac = getZodiacSign(birthday);
    if(zodiac) {
        const tarot = getTarotCard(zodiac.sign);
        const output = `<h2>Hello ${name}!</h2>
        <div class="card">
            <h3>Your Zodiac Sign: ${zodiac.sign}</h3>
            <p>${zodiac.wisdom}</p>
            <h3>Your Tarot Card: ${tarot.card}</h3>
            <p>${tarot.meaning}</p>
        </div>`;

        document.getElementById("output").innerHTML = output;
    } else {
        document.getElementById("output").innerHTML = "<p>We couldn't determine your zodiac sign. Please try again.</p>"
    }
}

    document.getElementById("get-wisdom").addEventListener("click", showZodiacAndTarotWisdom);
