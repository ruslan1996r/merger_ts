import { successMerge } from "./mocks"
import { ObjectType } from "./types"

function merge(object1: ObjectType, object2: ObjectType): ObjectType {
  let mergedObject = { ...object1 }

  for (const key in object2) {
    if (object2.hasOwnProperty(key)) {
      // recursion
      if (
        !Array.isArray(mergedObject[key]) &&
        typeof mergedObject[key] === "object"
      ) {
        mergedObject[key] = merge(mergedObject[key], object2[key])

        continue
      }
      // 2) If a[field] is an array an b[field] exists but is undefined or null, set a[field] to an empty array
      if (Array.isArray(mergedObject[key]) && !object2[key]) {
        mergedObject[key] = []
        continue
      }
      // 4) If a[field] exists and b[field] exists but is undefined, delete a[field]
      if (mergedObject[key] && !object2[key]) {
        delete mergedObject[key]
        continue
      }
      // 1) If a[field] is an array, and b[field] is defined and is not an array, add b[field] to the array
      if (Array.isArray(mergedObject[key]) && !Array.isArray(object2[key])) {
        mergedObject[key] = [...mergedObject[key], object2[key]]
        continue
      }
      // 3) If a[filed] is an array and b[field] is an array, set a[field] to b[field]
      if (Array.isArray(mergedObject[key]) && Array.isArray(object2[key])) {
        mergedObject[key] = object2[key]
        continue
      }
      if (!mergedObject[key] && object2[key]) {
        mergedObject[key] = object2[key]
        continue
      }

      // If b[field] is a non-complex type (number, string, boolean, et cetera), copy to a[field]
      // Or keys are similiar, rewrite a[key] to b[key]
      mergedObject[key] = object2[key]
    }
  }

  return mergedObject
}

console.log(merge(successMerge.object1, successMerge.object2))

export { merge }
