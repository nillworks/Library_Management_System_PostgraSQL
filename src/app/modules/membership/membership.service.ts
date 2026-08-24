import { prisma } from '../../../lib/prisma';

const createMembershipDB = async (payload: any) => {
  const result = prisma.membership.create({
    data: payload,
  });

  return result;
};

export const membershipService = {
  createMembershipDB,
};
