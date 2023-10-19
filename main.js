const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  const counts = {
    healthy: 0,
    exchange: 0,
    failed: 0
  };

  for (const capacity of presentCapacities) {
     const ratedCapacity = 120;  
    const soh = (capacity / ratedCapacity) * 100;

     if (soh > 80) {
      counts.healthy++;
    } else if (soh >= 63 && soh <= 80) {
      counts.exchange++;
    } else {
      counts.failed++;
    }
  }

  return counts;
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  const counts = countBatteriesByHealth(presentCapacities);
  assert.strictEqual(counts.healthy, 2);
  assert.strictEqual(counts.exchange, 3);
  assert.strictEqual(counts.failed, 1);
  console.log("Done counting :)");
}

testBucketingByHealth();

