# Interview Questions - Blog Task

## Q1: What are some differences between interfaces and types in TypeScript?

TypeScript-এ `interface` এবং `type` উভয়ই object এর structure define করতে ব্যবহৃত হয়, তবে এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে:

### মূল পার্থক্যসমূহ:

**১. Declaration Merging:**

- `interface` একাধিকবার declare করলে automatically merge হয়ে যায়
- `type` একাধিকবার declare করলে error হয়

**২. Union এবং Intersection Types:**

- `type` দিয়ে সহজেই union (|) এবং intersection (&) তৈরি করা যায়
- `interface` এ union টাইপ তৈরি করা যায় না।

**৩. Primitive Types:**

- `type` দিয়ে primitive types এর alias তৈরি করা যায়
- `interface` primitive types এর alias তৈরি করা যায় না।

**৪. Computed Properties:**

- `type` দিয়ে advanced mapped types সহজে তৈরি করা যায়।
- `interface` দিয়ে mapped types সরাসরি সম্ভব না 

---

## Q2: What is the use of the keyof keyword in TypeScript? Provide an example.

`keyof` হলো TypeScript-এর একটি operator যা object type থেকে সব key নিয়ে একটি union type তৈরি করে।

### উদাহরণ: Type-Safe Property

```typescript
type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User;
// ফলাফল: "name" | "age" | "email"
```

### keyof এর সুবিধা:

1. **Type Safety:** Compile time-এ ভুল key দিলে invalid keys ধরা পড়ে
2. **Autocomplete:** IDE-তে code লিখার সময় সব valid keys দেখায়
3. **Refactoring:** Property name পরিবর্তন করলে সব জায়গায় update হয়

---
