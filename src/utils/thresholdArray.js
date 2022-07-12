//For IntersectionObserver -
//builds an array ranging from 0.0 to 1.0 by the given amount of steps
//Passing 5 will return [0.0, 0.2, 0.4, 0.6, 0.8, 1.0]
const thresholdArray = steps =>
    Array(steps + 1)
        .fill(0)
        .map((_, index) => index / steps || 0);

export default thresholdArray;