enum Membership {
  Simple,
  Standard,
  Premium,
}

const membership = Membership.Standard;
const membershipReverse = Membership[2];

console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
  VK = "vk.com",
  FACEBOOK = "facebook.com",
  INSTAGRAM = "instagram.com",
}
