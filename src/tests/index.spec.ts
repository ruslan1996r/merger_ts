import { merge } from "..";
import {
  successMerge,
  firstCondition,
  secondCondition,
  thirdCondition,
  fourthCondition,
} from "../mocks";

// Conditions
// 1) If a[field] is an array, and b[field] is defined and is not an array, add b[field] to the array
// 2) If a[field] is an array an b[field] exists but is undefined or null, set a[field] to an empty array
// 3) If a[filed] is an array and b[field] is an array, set a[field] to b[field]
// 4) If a[field] exists and b[field] exists but is undefined, delete a[field]
// 5) If b[field] is a non - complex type(number, string, boolean, et cetera), copy to a[field]

describe("test merge function", () => {
  it("should return the expected merge result given in the task description", () => {
    const { object1, object2, result } = successMerge;
    const merged = merge(object1, object2);

    expect(merged).toEqual(result);
  });

  it("should check first task condition", () => {
    const { object1, object2, result } = firstCondition;
    const merged = merge(object1, object2);

    expect(merged).toEqual(result);
  });

  it("should check second task condition", () => {
    const { object1, object2, result } = secondCondition;
    const merged = merge(object1, object2);

    expect(merged).toEqual(result);
  });

  it("should check third task condition", () => {
    const { object1, object2, result } = thirdCondition;
    const merged = merge(object1, object2);

    expect(merged).toEqual(result);
  });

  it("should check fourth task condition", () => {
    const { object1, object2, result } = fourthCondition;
    const merged = merge(object1, object2);

    expect(merged).toEqual(result);
  });
});
