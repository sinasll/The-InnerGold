document.addEventListener('DOMContentLoaded', () => {
  // Fetch trade entries from localStorage or initialize an empty array
  const tradeEntries = JSON.parse(localStorage.getItem('tradeEntries')) || [];

  // Calculate total trades, wins, and losses
  const totalTrades = tradeEntries.length;
  const wins = tradeEntries.filter(entry => entry.outcome === 'Win').length;
  const losses = tradeEntries.filter(entry => entry.outcome === 'Lose').length;

  // Initialize win streak counter
  let winStreak = 0;
  let maxWinStreak = 0;

  // Iterate over the trade entries and calculate streaks
  tradeEntries.forEach(entry => {
    if (entry.outcome === 'Win') {
      winStreak++;
      if (winStreak > maxWinStreak) {
        maxWinStreak = winStreak;
      }
    } else if (entry.outcome === 'Lose') {
      winStreak = 0; // Reset win streak after a loss
    }
  });

  // Breakout, Fakeout, and Dragon Trades
  const breakoutTrades = tradeEntries.filter(entry => entry.setup === 'Breakout');
  const fakeoutTrades = tradeEntries.filter(entry => entry.setup === 'Fakeout');
  const dragonTrades = tradeEntries.filter(entry => entry.setup === 'Dragon');

  // Calculate win rates for setups
  const breakoutWinRate = breakoutTrades.length ? (breakoutTrades.filter(e => e.outcome === 'Win').length / breakoutTrades.length) * 100 : 0;
  const fakeoutWinRate = fakeoutTrades.length ? (fakeoutTrades.filter(e => e.outcome === 'Win').length / fakeoutTrades.length) * 100 : 0;
  const dragonWinRate = dragonTrades.length ? (dragonTrades.filter(e => e.outcome === 'Win').length / dragonTrades.length) * 100 : 0;

  // Calculate total and average pips
  const totalPips = tradeEntries.reduce((acc, entry) => {
    return entry.outcome === 'Win' || entry.outcome === 'Breakeven'
      ? acc + Math.abs(entry.pips)
      : acc - Math.abs(entry.pips);
  }, 0);

  const averagePips = totalTrades ? totalPips / totalTrades : 0;
  const winRate = totalTrades ? (wins / totalTrades) * 100 : 0;

  // Update Overall Stats
  document.getElementById('win-rate').textContent = `${winRate.toFixed(2)}%`;
  document.getElementById('total-trades').textContent = totalTrades;
  document.getElementById('total-pips').textContent = totalPips.toFixed(2);
  document.getElementById('average-pips').textContent = averagePips.toFixed(2);
  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;
  document.getElementById('win-streak').textContent = winStreak;

  // Update Setup Win Rates
  document.getElementById('breakout-win-rate').textContent = `${breakoutWinRate.toFixed(2)}%`;
  document.getElementById('fakeout-win-rate').textContent = `${fakeoutWinRate.toFixed(2)}%`;
  document.getElementById('dragon-win-rate').textContent = `${dragonWinRate.toFixed(2)}%`;

  // Define Entry Types for Calculation
  const entryTypes = [
    { id: 'break-prev-win-rate', name: 'Break previos H/L' },
    { id: 'break-current-win-rate', name: 'Break current H/L' },
    { id: 'flip-win-rate', name: 'Flip' },
    { id: 'one-stair-win-rate', name: 'One stair' },
    { id: 'wick-entry-win-rate', name: 'Wick entry' }
  ];

  // Calculate and Update Win Rates for Each Entry Type
  entryTypes.forEach(entry => {
    const filteredTrades = tradeEntries.filter(trade => trade.entry === entry.name);
    const winCount = filteredTrades.filter(trade => trade.outcome === 'Win').length;
    const winRate = filteredTrades.length ? (winCount / filteredTrades.length) * 100 : 0;
    document.getElementById(entry.id).textContent = `${winRate.toFixed(2)}%`;
  });

  // Timeframe Win Rates
  const timeframes = ['5min', '15min', '30min', '1hr', '4hr'];

  timeframes.forEach(timeframe => {
    const timeframeTrades = tradeEntries.filter(entry => entry.timeframe === timeframe);
    const timeframeWinCount = timeframeTrades.filter(entry => entry.outcome === 'Win').length;
    const timeframeWinRate = timeframeTrades.length ? (timeframeWinCount / timeframeTrades.length) * 100 : 0;
    document.getElementById(`t${timeframe}`).textContent = `${timeframeWinRate.toFixed(2)}%`;
  });

  // Session Win Rates (Asia, Pre London, London, Pre New York, New York)
  const sessions = [
    { id: 'Asia', name: 'Asia' },
    { id: 'PreLondon', name: 'Pre London' },
    { id: 'London', name: 'London' },
    { id: 'PreNewYork', name: 'Pre New York' },
    { id: 'NewYork', name: 'New York' }
  ];

  sessions.forEach(session => {
    const sessionTrades = tradeEntries.filter(entry => entry.session === session.name);
    const sessionWinCount = sessionTrades.filter(entry => entry.outcome === 'Win').length;
    const sessionWinRate = sessionTrades.length ? (sessionWinCount / sessionTrades.length) * 100 : 0;
    document.getElementById(session.id).textContent = `${sessionWinRate.toFixed(2)}%`;
  });
});
