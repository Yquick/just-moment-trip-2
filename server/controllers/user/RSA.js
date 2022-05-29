const decimalArr = [
  1993, 1997, 1999, 2003, 2011, 2017, 2027, 2029, 2039, 2053, 2063, 2069, 2081, 2083, 2087, 2089,
  2099, 2111, 2113, 2129, 2131, 2137, 2141, 2143, 2153, 2161, 2179, 2203, 2207, 2213, 2221, 2237,
  2239, 2243, 2251, 2267, 2269, 2273, 2281, 2287, 2293, 2297, 2309, 2311, 2333, 2339, 2341, 2347,
  2351, 2357, 2371, 2377, 2381, 2383, 2389, 2393, 2399, 2411, 2417, 2423, 2437, 2441, 2447, 2459,
  2467, 2473, 2477, 2503, 2521, 2531, 2539, 2543, 2549, 2551, 2557, 2579, 2591, 2593, 2609, 2617,
  2621, 2633, 2647, 2657, 2659, 2663, 2671, 2677, 2683, 2687, 2689, 2693, 2699, 2707, 2711, 2713,
  2719, 2729, 2731, 2741, 2749, 2753, 2767, 2777, 2789, 2791, 2797, 2801, 2803, 2819, 2833, 2837,
  2843, 2851, 2857, 2861, 2879, 2887, 2897, 2903, 2909, 2917, 2927, 2939, 2953, 2957, 2963, 2969,
  2971, 2999, 3001, 3011, 3019, 3023, 3037, 3041, 3049, 3061, 3067, 3079, 3083, 3089, 3109, 3119,
  3121, 3137, 3163, 3167, 3169, 3181, 3187, 3191, 3203, 3209, 3217, 3221, 3229, 3251, 3253, 3257,
  3259, 3271, 3299, 3301, 3307, 3313, 3319, 3323, 3329, 3331, 3343, 3347, 3359, 3361, 3371, 3373,
  3389, 3391, 3407, 3413, 3433, 3449, 3457, 3461, 3463, 3467, 3469, 3491, 3499, 3511, 3517, 3527,
  3529, 3533, 3539, 3541, 3547, 3557, 3559, 3571, 3581, 3583, 3593, 3607, 3613, 3617, 3623, 3631,
  3637, 3643, 3659, 3671, 3673, 3677, 3691, 3697, 3701, 3709, 3719, 3727, 3733, 3739, 3761, 3767,
  3769, 3779, 3793, 3797, 3803, 3821, 3823, 3833, 3847, 3851, 3853, 3863, 3877, 3881, 3889, 3907,
  3911, 3917, 3919, 3923, 3929, 3931, 3943, 3947, 3967, 3989, 4001, 4003, 4007, 4013, 4019, 4021,
];

// 두 소수 p , q 를 준비한다
// p - 1, q - 1 각각 서로소인 정수 e를 준비한다
// ed를 (p - 1)(q - 1)으로 나눈 나머지가 1이 되도록 하는 d를 찾는다.
// N = pq를 계산한 후, N과 e를 공개한다. 이들이 바로 공개키. d는 개인키이다.
// 이제 p, q, (p-1)(q-1)는 필요 없거니와 있어 봐야 보안에 오히려 문제를 일으킬 수 있으니, 파기한다
exports.createKey = () => {
  const a = 130n;
  // 두 소수 p , q 를 준비한다
  //   let p = 9109n;
  //   let q = 9109n;
  let p = BigInt(decimalArr[Math.floor(Math.random() * decimalArr.length)]);

  let q = BigInt(decimalArr[Math.floor(Math.random() * decimalArr.length)]);
  // p - 1, q - 1 각각 서로소인 정수 e를 준비한다
  const e = 65537n;
  // ed를 (p - 1)(q - 1)으로 나눈 나머지가 1이 되도록 하는 d를 찾는다.
  let d = 0n;
  while (!((e * d) % ((p - 1n) * (q - 1n)) === 1n)) {
    d++;
  }
  // N = pq를 계산한 후, N과 e를 공개한다. 이들이 바로 공개키. d는 개인키이다.
  const N = p * q;

  // 암호화
  //   let encrypted = a ** e % N;

  // 복호화
  //   let decrypted = encrypted ** d % N;

  console.log(a, p, q, e, d, N);
  //   console.log("encrypted", encrypted);
  //   console.log("decrypted", decrypted);
  p = null;
  q = null;
  return [e, N, d];
};
this.createKey();

// console.log(Math.floor(Math.random() * decimalArr.length));
// console.log(Math.floor(Math.random() * decimalArr.length));
