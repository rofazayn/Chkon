import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateCredential = {
  __typename?: 'AggregateCredential';
  _count?: Maybe<CredentialCountAggregate>;
  _max?: Maybe<CredentialMaxAggregate>;
  _min?: Maybe<CredentialMinAggregate>;
};

export type AggregateCredentialRequest = {
  __typename?: 'AggregateCredentialRequest';
  _count?: Maybe<CredentialRequestCountAggregate>;
  _max?: Maybe<CredentialRequestMaxAggregate>;
  _min?: Maybe<CredentialRequestMinAggregate>;
};

export type AggregateOrganization = {
  __typename?: 'AggregateOrganization';
  _count?: Maybe<OrganizationCountAggregate>;
  _max?: Maybe<OrganizationMaxAggregate>;
  _min?: Maybe<OrganizationMinAggregate>;
};

export type AggregateOrganizationMember = {
  __typename?: 'AggregateOrganizationMember';
  _count?: Maybe<OrganizationMemberCountAggregate>;
  _max?: Maybe<OrganizationMemberMaxAggregate>;
  _min?: Maybe<OrganizationMemberMinAggregate>;
};

export type AggregatePresentation = {
  __typename?: 'AggregatePresentation';
  _count?: Maybe<PresentationCountAggregate>;
  _max?: Maybe<PresentationMaxAggregate>;
  _min?: Maybe<PresentationMinAggregate>;
};

export type AggregatePresentationRequest = {
  __typename?: 'AggregatePresentationRequest';
  _count?: Maybe<PresentationRequestCountAggregate>;
  _max?: Maybe<PresentationRequestMaxAggregate>;
  _min?: Maybe<PresentationRequestMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Credential = {
  __typename?: 'Credential';
  createdAt: Scalars['DateTime'];
  expiryDate: Scalars['DateTime'];
  holderConsent: Scalars['Boolean'];
  id: Scalars['String'];
  issuer: OrganizationMember;
  issuerConsent: Scalars['Boolean'];
  issuerId: Scalars['String'];
  organization: Organization;
  organizationId: Scalars['String'];
  payload: Scalars['JSON'];
  request?: Maybe<CredentialRequest>;
  requestId?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type CredentialCountAggregate = {
  __typename?: 'CredentialCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  expiryDate: Scalars['Int'];
  holderConsent: Scalars['Int'];
  id: Scalars['Int'];
  issuerConsent: Scalars['Int'];
  issuerId: Scalars['Int'];
  organizationId: Scalars['Int'];
  payload: Scalars['Int'];
  requestId: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CredentialCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrder>;
  holderConsent?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuerConsent?: InputMaybe<SortOrder>;
  issuerId?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  payload?: InputMaybe<SortOrder>;
  requestId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CredentialCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuer: OrganizationMemberCreateNestedOneWithoutIssuedCredentialsInput;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  organization: OrganizationCreateNestedOneWithoutIssuedCredentialsInput;
  payload: Scalars['JSON'];
  request?: InputMaybe<CredentialRequestCreateNestedOneWithoutCredentialInput>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCredentialsInput;
};

export type CredentialCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  issuerId: Scalars['String'];
  organizationId: Scalars['String'];
  payload: Scalars['JSON'];
  requestId?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CredentialCreateManyIssuerInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  organizationId: Scalars['String'];
  payload: Scalars['JSON'];
  requestId?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CredentialCreateManyIssuerInputEnvelope = {
  data: Array<CredentialCreateManyIssuerInput>;
};

export type CredentialCreateManyOrganizationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  issuerId: Scalars['String'];
  payload: Scalars['JSON'];
  requestId?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CredentialCreateManyOrganizationInputEnvelope = {
  data: Array<CredentialCreateManyOrganizationInput>;
};

export type CredentialCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  issuerId: Scalars['String'];
  organizationId: Scalars['String'];
  payload: Scalars['JSON'];
  requestId?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CredentialCreateManyUserInputEnvelope = {
  data: Array<CredentialCreateManyUserInput>;
};

export type CredentialCreateNestedManyWithoutIssuerInput = {
  connect?: InputMaybe<Array<CredentialWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CredentialCreateOrConnectWithoutIssuerInput>>;
  create?: InputMaybe<Array<CredentialCreateWithoutIssuerInput>>;
  createMany?: InputMaybe<CredentialCreateManyIssuerInputEnvelope>;
};

export type CredentialCreateNestedManyWithoutOrganizationInput = {
  connect?: InputMaybe<Array<CredentialWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CredentialCreateOrConnectWithoutOrganizationInput>>;
  create?: InputMaybe<Array<CredentialCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<CredentialCreateManyOrganizationInputEnvelope>;
};

export type CredentialCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CredentialWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CredentialCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CredentialCreateWithoutUserInput>>;
  createMany?: InputMaybe<CredentialCreateManyUserInputEnvelope>;
};

export type CredentialCreateNestedOneWithoutRequestInput = {
  connect?: InputMaybe<CredentialWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CredentialCreateOrConnectWithoutRequestInput>;
  create?: InputMaybe<CredentialCreateWithoutRequestInput>;
};

export type CredentialCreateOrConnectWithoutIssuerInput = {
  create: CredentialCreateWithoutIssuerInput;
  where: CredentialWhereUniqueInput;
};

export type CredentialCreateOrConnectWithoutOrganizationInput = {
  create: CredentialCreateWithoutOrganizationInput;
  where: CredentialWhereUniqueInput;
};

export type CredentialCreateOrConnectWithoutRequestInput = {
  create: CredentialCreateWithoutRequestInput;
  where: CredentialWhereUniqueInput;
};

export type CredentialCreateOrConnectWithoutUserInput = {
  create: CredentialCreateWithoutUserInput;
  where: CredentialWhereUniqueInput;
};

export type CredentialCreateWithoutIssuerInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  organization: OrganizationCreateNestedOneWithoutIssuedCredentialsInput;
  payload: Scalars['JSON'];
  request?: InputMaybe<CredentialRequestCreateNestedOneWithoutCredentialInput>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCredentialsInput;
};

export type CredentialCreateWithoutOrganizationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuer: OrganizationMemberCreateNestedOneWithoutIssuedCredentialsInput;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  payload: Scalars['JSON'];
  request?: InputMaybe<CredentialRequestCreateNestedOneWithoutCredentialInput>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCredentialsInput;
};

export type CredentialCreateWithoutRequestInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuer: OrganizationMemberCreateNestedOneWithoutIssuedCredentialsInput;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  organization: OrganizationCreateNestedOneWithoutIssuedCredentialsInput;
  payload: Scalars['JSON'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCredentialsInput;
};

export type CredentialCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuer: OrganizationMemberCreateNestedOneWithoutIssuedCredentialsInput;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  organization: OrganizationCreateNestedOneWithoutIssuedCredentialsInput;
  payload: Scalars['JSON'];
  request?: InputMaybe<CredentialRequestCreateNestedOneWithoutCredentialInput>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CredentialGroupBy = {
  __typename?: 'CredentialGroupBy';
  _count?: Maybe<CredentialCountAggregate>;
  _max?: Maybe<CredentialMaxAggregate>;
  _min?: Maybe<CredentialMinAggregate>;
  createdAt: Scalars['DateTime'];
  expiryDate: Scalars['DateTime'];
  holderConsent: Scalars['Boolean'];
  id: Scalars['String'];
  issuerConsent: Scalars['Boolean'];
  issuerId: Scalars['String'];
  organizationId: Scalars['String'];
  payload: Scalars['JSON'];
  requestId?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type CredentialListRelationFilter = {
  every?: InputMaybe<CredentialWhereInput>;
  none?: InputMaybe<CredentialWhereInput>;
  some?: InputMaybe<CredentialWhereInput>;
};

export type CredentialMaxAggregate = {
  __typename?: 'CredentialMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expiryDate?: Maybe<Scalars['DateTime']>;
  holderConsent?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  issuerConsent?: Maybe<Scalars['Boolean']>;
  issuerId?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type CredentialMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrder>;
  holderConsent?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuerConsent?: InputMaybe<SortOrder>;
  issuerId?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  requestId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CredentialMinAggregate = {
  __typename?: 'CredentialMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expiryDate?: Maybe<Scalars['DateTime']>;
  holderConsent?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  issuerConsent?: Maybe<Scalars['Boolean']>;
  issuerId?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type CredentialMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrder>;
  holderConsent?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuerConsent?: InputMaybe<SortOrder>;
  issuerId?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  requestId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CredentialOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CredentialOrderByWithAggregationInput = {
  _count?: InputMaybe<CredentialCountOrderByAggregateInput>;
  _max?: InputMaybe<CredentialMaxOrderByAggregateInput>;
  _min?: InputMaybe<CredentialMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrder>;
  holderConsent?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuerConsent?: InputMaybe<SortOrder>;
  issuerId?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  payload?: InputMaybe<SortOrder>;
  requestId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CredentialOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrder>;
  holderConsent?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuer?: InputMaybe<OrganizationMemberOrderByWithRelationInput>;
  issuerConsent?: InputMaybe<SortOrder>;
  issuerId?: InputMaybe<SortOrder>;
  organization?: InputMaybe<OrganizationOrderByWithRelationInput>;
  organizationId?: InputMaybe<SortOrder>;
  payload?: InputMaybe<SortOrder>;
  request?: InputMaybe<CredentialRequestOrderByWithRelationInput>;
  requestId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type CredentialRelationFilter = {
  is?: InputMaybe<CredentialWhereInput>;
  isNot?: InputMaybe<CredentialWhereInput>;
};

export type CredentialRequest = {
  __typename?: 'CredentialRequest';
  attributes: Scalars['JSON'];
  completed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  credential?: Maybe<Credential>;
  credentialType: Scalars['String'];
  id: Scalars['String'];
  issuer: Organization;
  issuerId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  valid: Scalars['Boolean'];
};

export type CredentialRequestCountAggregate = {
  __typename?: 'CredentialRequestCountAggregate';
  _all: Scalars['Int'];
  attributes: Scalars['Int'];
  completed: Scalars['Int'];
  createdAt: Scalars['Int'];
  credentialType: Scalars['Int'];
  id: Scalars['Int'];
  issuerId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
  valid: Scalars['Int'];
};

export type CredentialRequestCountOrderByAggregateInput = {
  attributes?: InputMaybe<SortOrder>;
  completed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  credentialType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuerId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  valid?: InputMaybe<SortOrder>;
};

export type CredentialRequestCreateInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credential?: InputMaybe<CredentialCreateNestedOneWithoutRequestInput>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  issuer: OrganizationCreateNestedOneWithoutCredentialRequestsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCredentialRequestsInput;
  valid?: InputMaybe<Scalars['Boolean']>;
};

export type CredentialRequestCreateManyInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  issuerId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  valid?: InputMaybe<Scalars['Boolean']>;
};

export type CredentialRequestCreateManyIssuerInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  valid?: InputMaybe<Scalars['Boolean']>;
};

export type CredentialRequestCreateManyIssuerInputEnvelope = {
  data: Array<CredentialRequestCreateManyIssuerInput>;
};

export type CredentialRequestCreateManyUserInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  issuerId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  valid?: InputMaybe<Scalars['Boolean']>;
};

export type CredentialRequestCreateManyUserInputEnvelope = {
  data: Array<CredentialRequestCreateManyUserInput>;
};

export type CredentialRequestCreateNestedManyWithoutIssuerInput = {
  connect?: InputMaybe<Array<CredentialRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CredentialRequestCreateOrConnectWithoutIssuerInput>>;
  create?: InputMaybe<Array<CredentialRequestCreateWithoutIssuerInput>>;
  createMany?: InputMaybe<CredentialRequestCreateManyIssuerInputEnvelope>;
};

export type CredentialRequestCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CredentialRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CredentialRequestCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CredentialRequestCreateWithoutUserInput>>;
  createMany?: InputMaybe<CredentialRequestCreateManyUserInputEnvelope>;
};

export type CredentialRequestCreateNestedOneWithoutCredentialInput = {
  connect?: InputMaybe<CredentialRequestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CredentialRequestCreateOrConnectWithoutCredentialInput>;
  create?: InputMaybe<CredentialRequestCreateWithoutCredentialInput>;
};

export type CredentialRequestCreateOrConnectWithoutCredentialInput = {
  create: CredentialRequestCreateWithoutCredentialInput;
  where: CredentialRequestWhereUniqueInput;
};

export type CredentialRequestCreateOrConnectWithoutIssuerInput = {
  create: CredentialRequestCreateWithoutIssuerInput;
  where: CredentialRequestWhereUniqueInput;
};

export type CredentialRequestCreateOrConnectWithoutUserInput = {
  create: CredentialRequestCreateWithoutUserInput;
  where: CredentialRequestWhereUniqueInput;
};

export type CredentialRequestCreateWithoutCredentialInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  issuer: OrganizationCreateNestedOneWithoutCredentialRequestsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCredentialRequestsInput;
  valid?: InputMaybe<Scalars['Boolean']>;
};

export type CredentialRequestCreateWithoutIssuerInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credential?: InputMaybe<CredentialCreateNestedOneWithoutRequestInput>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCredentialRequestsInput;
  valid?: InputMaybe<Scalars['Boolean']>;
};

export type CredentialRequestCreateWithoutUserInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credential?: InputMaybe<CredentialCreateNestedOneWithoutRequestInput>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  issuer: OrganizationCreateNestedOneWithoutCredentialRequestsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  valid?: InputMaybe<Scalars['Boolean']>;
};

export type CredentialRequestGroupBy = {
  __typename?: 'CredentialRequestGroupBy';
  _count?: Maybe<CredentialRequestCountAggregate>;
  _max?: Maybe<CredentialRequestMaxAggregate>;
  _min?: Maybe<CredentialRequestMinAggregate>;
  attributes: Scalars['JSON'];
  completed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  credentialType: Scalars['String'];
  id: Scalars['String'];
  issuerId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  valid: Scalars['Boolean'];
};

export type CredentialRequestListRelationFilter = {
  every?: InputMaybe<CredentialRequestWhereInput>;
  none?: InputMaybe<CredentialRequestWhereInput>;
  some?: InputMaybe<CredentialRequestWhereInput>;
};

export type CredentialRequestMaxAggregate = {
  __typename?: 'CredentialRequestMaxAggregate';
  completed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  credentialType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  issuerId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  valid?: Maybe<Scalars['Boolean']>;
};

export type CredentialRequestMaxOrderByAggregateInput = {
  completed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  credentialType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuerId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  valid?: InputMaybe<SortOrder>;
};

export type CredentialRequestMinAggregate = {
  __typename?: 'CredentialRequestMinAggregate';
  completed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  credentialType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  issuerId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  valid?: Maybe<Scalars['Boolean']>;
};

export type CredentialRequestMinOrderByAggregateInput = {
  completed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  credentialType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuerId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  valid?: InputMaybe<SortOrder>;
};

export type CredentialRequestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CredentialRequestOrderByWithAggregationInput = {
  _count?: InputMaybe<CredentialRequestCountOrderByAggregateInput>;
  _max?: InputMaybe<CredentialRequestMaxOrderByAggregateInput>;
  _min?: InputMaybe<CredentialRequestMinOrderByAggregateInput>;
  attributes?: InputMaybe<SortOrder>;
  completed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  credentialType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuerId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  valid?: InputMaybe<SortOrder>;
};

export type CredentialRequestOrderByWithRelationInput = {
  attributes?: InputMaybe<SortOrder>;
  completed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  credential?: InputMaybe<CredentialOrderByWithRelationInput>;
  credentialType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuer?: InputMaybe<OrganizationOrderByWithRelationInput>;
  issuerId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  valid?: InputMaybe<SortOrder>;
};

export type CredentialRequestRelationFilter = {
  is?: InputMaybe<CredentialRequestWhereInput>;
  isNot?: InputMaybe<CredentialRequestWhereInput>;
};

export enum CredentialRequestScalarFieldEnum {
  Attributes = 'attributes',
  Completed = 'completed',
  CreatedAt = 'createdAt',
  CredentialType = 'credentialType',
  Id = 'id',
  IssuerId = 'issuerId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  Valid = 'valid'
}

export type CredentialRequestScalarWhereInput = {
  AND?: InputMaybe<Array<CredentialRequestScalarWhereInput>>;
  NOT?: InputMaybe<Array<CredentialRequestScalarWhereInput>>;
  OR?: InputMaybe<Array<CredentialRequestScalarWhereInput>>;
  attributes?: InputMaybe<JsonFilter>;
  completed?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  credentialType?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  issuerId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
  valid?: InputMaybe<BoolFilter>;
};

export type CredentialRequestScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CredentialRequestScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CredentialRequestScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CredentialRequestScalarWhereWithAggregatesInput>>;
  attributes?: InputMaybe<JsonWithAggregatesFilter>;
  completed?: InputMaybe<BoolWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  credentialType?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  issuerId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  valid?: InputMaybe<BoolWithAggregatesFilter>;
};

export type CredentialRequestUpdateInput = {
  attributes?: InputMaybe<Scalars['JSON']>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  credential?: InputMaybe<CredentialUpdateOneWithoutRequestNestedInput>;
  credentialType?: InputMaybe<StringFieldUpdateOperationsInput>;
  issuer?: InputMaybe<OrganizationUpdateOneRequiredWithoutCredentialRequestsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCredentialRequestsNestedInput>;
  valid?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type CredentialRequestUpdateManyMutationInput = {
  attributes?: InputMaybe<Scalars['JSON']>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  credentialType?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  valid?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type CredentialRequestUpdateManyWithWhereWithoutIssuerInput = {
  data: CredentialRequestUpdateManyMutationInput;
  where: CredentialRequestScalarWhereInput;
};

export type CredentialRequestUpdateManyWithWhereWithoutUserInput = {
  data: CredentialRequestUpdateManyMutationInput;
  where: CredentialRequestScalarWhereInput;
};

export type CredentialRequestUpdateManyWithoutIssuerNestedInput = {
  connect?: InputMaybe<Array<CredentialRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CredentialRequestCreateOrConnectWithoutIssuerInput>>;
  create?: InputMaybe<Array<CredentialRequestCreateWithoutIssuerInput>>;
  createMany?: InputMaybe<CredentialRequestCreateManyIssuerInputEnvelope>;
  delete?: InputMaybe<Array<CredentialRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CredentialRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CredentialRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<CredentialRequestWhereUniqueInput>>;
  update?: InputMaybe<Array<CredentialRequestUpdateWithWhereUniqueWithoutIssuerInput>>;
  updateMany?: InputMaybe<Array<CredentialRequestUpdateManyWithWhereWithoutIssuerInput>>;
  upsert?: InputMaybe<Array<CredentialRequestUpsertWithWhereUniqueWithoutIssuerInput>>;
};

export type CredentialRequestUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<CredentialRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CredentialRequestCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CredentialRequestCreateWithoutUserInput>>;
  createMany?: InputMaybe<CredentialRequestCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CredentialRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CredentialRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CredentialRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<CredentialRequestWhereUniqueInput>>;
  update?: InputMaybe<Array<CredentialRequestUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CredentialRequestUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CredentialRequestUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CredentialRequestUpdateOneWithoutCredentialNestedInput = {
  connect?: InputMaybe<CredentialRequestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CredentialRequestCreateOrConnectWithoutCredentialInput>;
  create?: InputMaybe<CredentialRequestCreateWithoutCredentialInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CredentialRequestUpdateWithoutCredentialInput>;
  upsert?: InputMaybe<CredentialRequestUpsertWithoutCredentialInput>;
};

export type CredentialRequestUpdateWithWhereUniqueWithoutIssuerInput = {
  data: CredentialRequestUpdateWithoutIssuerInput;
  where: CredentialRequestWhereUniqueInput;
};

export type CredentialRequestUpdateWithWhereUniqueWithoutUserInput = {
  data: CredentialRequestUpdateWithoutUserInput;
  where: CredentialRequestWhereUniqueInput;
};

export type CredentialRequestUpdateWithoutCredentialInput = {
  attributes?: InputMaybe<Scalars['JSON']>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  credentialType?: InputMaybe<StringFieldUpdateOperationsInput>;
  issuer?: InputMaybe<OrganizationUpdateOneRequiredWithoutCredentialRequestsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCredentialRequestsNestedInput>;
  valid?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type CredentialRequestUpdateWithoutIssuerInput = {
  attributes?: InputMaybe<Scalars['JSON']>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  credential?: InputMaybe<CredentialUpdateOneWithoutRequestNestedInput>;
  credentialType?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCredentialRequestsNestedInput>;
  valid?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type CredentialRequestUpdateWithoutUserInput = {
  attributes?: InputMaybe<Scalars['JSON']>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  credential?: InputMaybe<CredentialUpdateOneWithoutRequestNestedInput>;
  credentialType?: InputMaybe<StringFieldUpdateOperationsInput>;
  issuer?: InputMaybe<OrganizationUpdateOneRequiredWithoutCredentialRequestsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  valid?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type CredentialRequestUpsertWithWhereUniqueWithoutIssuerInput = {
  create: CredentialRequestCreateWithoutIssuerInput;
  update: CredentialRequestUpdateWithoutIssuerInput;
  where: CredentialRequestWhereUniqueInput;
};

export type CredentialRequestUpsertWithWhereUniqueWithoutUserInput = {
  create: CredentialRequestCreateWithoutUserInput;
  update: CredentialRequestUpdateWithoutUserInput;
  where: CredentialRequestWhereUniqueInput;
};

export type CredentialRequestUpsertWithoutCredentialInput = {
  create: CredentialRequestCreateWithoutCredentialInput;
  update: CredentialRequestUpdateWithoutCredentialInput;
};

export type CredentialRequestWhereInput = {
  AND?: InputMaybe<Array<CredentialRequestWhereInput>>;
  NOT?: InputMaybe<Array<CredentialRequestWhereInput>>;
  OR?: InputMaybe<Array<CredentialRequestWhereInput>>;
  attributes?: InputMaybe<JsonFilter>;
  completed?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  credential?: InputMaybe<CredentialRelationFilter>;
  credentialType?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  issuer?: InputMaybe<OrganizationRelationFilter>;
  issuerId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  valid?: InputMaybe<BoolFilter>;
};

export type CredentialRequestWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum CredentialScalarFieldEnum {
  CreatedAt = 'createdAt',
  ExpiryDate = 'expiryDate',
  HolderConsent = 'holderConsent',
  Id = 'id',
  IssuerConsent = 'issuerConsent',
  IssuerId = 'issuerId',
  OrganizationId = 'organizationId',
  Payload = 'payload',
  RequestId = 'requestId',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type CredentialScalarWhereInput = {
  AND?: InputMaybe<Array<CredentialScalarWhereInput>>;
  NOT?: InputMaybe<Array<CredentialScalarWhereInput>>;
  OR?: InputMaybe<Array<CredentialScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiryDate?: InputMaybe<DateTimeFilter>;
  holderConsent?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  issuerConsent?: InputMaybe<BoolFilter>;
  issuerId?: InputMaybe<StringFilter>;
  organizationId?: InputMaybe<StringFilter>;
  payload?: InputMaybe<JsonFilter>;
  requestId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CredentialScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CredentialScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CredentialScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CredentialScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expiryDate?: InputMaybe<DateTimeWithAggregatesFilter>;
  holderConsent?: InputMaybe<BoolWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  issuerConsent?: InputMaybe<BoolWithAggregatesFilter>;
  issuerId?: InputMaybe<StringWithAggregatesFilter>;
  organizationId?: InputMaybe<StringWithAggregatesFilter>;
  payload?: InputMaybe<JsonWithAggregatesFilter>;
  requestId?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type CredentialUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  holderConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  issuer?: InputMaybe<OrganizationMemberUpdateOneRequiredWithoutIssuedCredentialsNestedInput>;
  issuerConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutIssuedCredentialsNestedInput>;
  payload?: InputMaybe<Scalars['JSON']>;
  request?: InputMaybe<CredentialRequestUpdateOneWithoutCredentialNestedInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCredentialsNestedInput>;
};

export type CredentialUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  holderConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  issuerConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  payload?: InputMaybe<Scalars['JSON']>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CredentialUpdateManyWithWhereWithoutIssuerInput = {
  data: CredentialUpdateManyMutationInput;
  where: CredentialScalarWhereInput;
};

export type CredentialUpdateManyWithWhereWithoutOrganizationInput = {
  data: CredentialUpdateManyMutationInput;
  where: CredentialScalarWhereInput;
};

export type CredentialUpdateManyWithWhereWithoutUserInput = {
  data: CredentialUpdateManyMutationInput;
  where: CredentialScalarWhereInput;
};

export type CredentialUpdateManyWithoutIssuerNestedInput = {
  connect?: InputMaybe<Array<CredentialWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CredentialCreateOrConnectWithoutIssuerInput>>;
  create?: InputMaybe<Array<CredentialCreateWithoutIssuerInput>>;
  createMany?: InputMaybe<CredentialCreateManyIssuerInputEnvelope>;
  delete?: InputMaybe<Array<CredentialWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CredentialScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CredentialWhereUniqueInput>>;
  set?: InputMaybe<Array<CredentialWhereUniqueInput>>;
  update?: InputMaybe<Array<CredentialUpdateWithWhereUniqueWithoutIssuerInput>>;
  updateMany?: InputMaybe<Array<CredentialUpdateManyWithWhereWithoutIssuerInput>>;
  upsert?: InputMaybe<Array<CredentialUpsertWithWhereUniqueWithoutIssuerInput>>;
};

export type CredentialUpdateManyWithoutOrganizationNestedInput = {
  connect?: InputMaybe<Array<CredentialWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CredentialCreateOrConnectWithoutOrganizationInput>>;
  create?: InputMaybe<Array<CredentialCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<CredentialCreateManyOrganizationInputEnvelope>;
  delete?: InputMaybe<Array<CredentialWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CredentialScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CredentialWhereUniqueInput>>;
  set?: InputMaybe<Array<CredentialWhereUniqueInput>>;
  update?: InputMaybe<Array<CredentialUpdateWithWhereUniqueWithoutOrganizationInput>>;
  updateMany?: InputMaybe<Array<CredentialUpdateManyWithWhereWithoutOrganizationInput>>;
  upsert?: InputMaybe<Array<CredentialUpsertWithWhereUniqueWithoutOrganizationInput>>;
};

export type CredentialUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<CredentialWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CredentialCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CredentialCreateWithoutUserInput>>;
  createMany?: InputMaybe<CredentialCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CredentialWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CredentialScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CredentialWhereUniqueInput>>;
  set?: InputMaybe<Array<CredentialWhereUniqueInput>>;
  update?: InputMaybe<Array<CredentialUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CredentialUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CredentialUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CredentialUpdateOneWithoutRequestNestedInput = {
  connect?: InputMaybe<CredentialWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CredentialCreateOrConnectWithoutRequestInput>;
  create?: InputMaybe<CredentialCreateWithoutRequestInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CredentialUpdateWithoutRequestInput>;
  upsert?: InputMaybe<CredentialUpsertWithoutRequestInput>;
};

export type CredentialUpdateWithWhereUniqueWithoutIssuerInput = {
  data: CredentialUpdateWithoutIssuerInput;
  where: CredentialWhereUniqueInput;
};

export type CredentialUpdateWithWhereUniqueWithoutOrganizationInput = {
  data: CredentialUpdateWithoutOrganizationInput;
  where: CredentialWhereUniqueInput;
};

export type CredentialUpdateWithWhereUniqueWithoutUserInput = {
  data: CredentialUpdateWithoutUserInput;
  where: CredentialWhereUniqueInput;
};

export type CredentialUpdateWithoutIssuerInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  holderConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  issuerConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutIssuedCredentialsNestedInput>;
  payload?: InputMaybe<Scalars['JSON']>;
  request?: InputMaybe<CredentialRequestUpdateOneWithoutCredentialNestedInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCredentialsNestedInput>;
};

export type CredentialUpdateWithoutOrganizationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  holderConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  issuer?: InputMaybe<OrganizationMemberUpdateOneRequiredWithoutIssuedCredentialsNestedInput>;
  issuerConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  payload?: InputMaybe<Scalars['JSON']>;
  request?: InputMaybe<CredentialRequestUpdateOneWithoutCredentialNestedInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCredentialsNestedInput>;
};

export type CredentialUpdateWithoutRequestInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  holderConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  issuer?: InputMaybe<OrganizationMemberUpdateOneRequiredWithoutIssuedCredentialsNestedInput>;
  issuerConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutIssuedCredentialsNestedInput>;
  payload?: InputMaybe<Scalars['JSON']>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCredentialsNestedInput>;
};

export type CredentialUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  holderConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  issuer?: InputMaybe<OrganizationMemberUpdateOneRequiredWithoutIssuedCredentialsNestedInput>;
  issuerConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutIssuedCredentialsNestedInput>;
  payload?: InputMaybe<Scalars['JSON']>;
  request?: InputMaybe<CredentialRequestUpdateOneWithoutCredentialNestedInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CredentialUpsertWithWhereUniqueWithoutIssuerInput = {
  create: CredentialCreateWithoutIssuerInput;
  update: CredentialUpdateWithoutIssuerInput;
  where: CredentialWhereUniqueInput;
};

export type CredentialUpsertWithWhereUniqueWithoutOrganizationInput = {
  create: CredentialCreateWithoutOrganizationInput;
  update: CredentialUpdateWithoutOrganizationInput;
  where: CredentialWhereUniqueInput;
};

export type CredentialUpsertWithWhereUniqueWithoutUserInput = {
  create: CredentialCreateWithoutUserInput;
  update: CredentialUpdateWithoutUserInput;
  where: CredentialWhereUniqueInput;
};

export type CredentialUpsertWithoutRequestInput = {
  create: CredentialCreateWithoutRequestInput;
  update: CredentialUpdateWithoutRequestInput;
};

export type CredentialWhereInput = {
  AND?: InputMaybe<Array<CredentialWhereInput>>;
  NOT?: InputMaybe<Array<CredentialWhereInput>>;
  OR?: InputMaybe<Array<CredentialWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiryDate?: InputMaybe<DateTimeFilter>;
  holderConsent?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  issuer?: InputMaybe<OrganizationMemberRelationFilter>;
  issuerConsent?: InputMaybe<BoolFilter>;
  issuerId?: InputMaybe<StringFilter>;
  organization?: InputMaybe<OrganizationRelationFilter>;
  organizationId?: InputMaybe<StringFilter>;
  payload?: InputMaybe<JsonFilter>;
  request?: InputMaybe<CredentialRequestRelationFilter>;
  requestId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CredentialWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  requestId?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type JsonFilter = {
  equals?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
};

export type JsonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedJsonFilter>;
  _min?: InputMaybe<NestedJsonFilter>;
  equals?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyCredential: AffectedRowsOutput;
  createManyCredentialRequest: AffectedRowsOutput;
  createManyOrganization: AffectedRowsOutput;
  createManyOrganizationMember: AffectedRowsOutput;
  createManyPresentation: AffectedRowsOutput;
  createManyPresentationRequest: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneCredential: Credential;
  createOneCredentialRequest: CredentialRequest;
  createOneOrganization: Organization;
  createOneOrganizationMember: OrganizationMember;
  createOnePresentation: Presentation;
  createOnePresentationRequest: PresentationRequest;
  createOneUser: User;
  deleteManyCredential: AffectedRowsOutput;
  deleteManyCredentialRequest: AffectedRowsOutput;
  deleteManyOrganization: AffectedRowsOutput;
  deleteManyOrganizationMember: AffectedRowsOutput;
  deleteManyPresentation: AffectedRowsOutput;
  deleteManyPresentationRequest: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneCredential?: Maybe<Credential>;
  deleteOneCredentialRequest?: Maybe<CredentialRequest>;
  deleteOneOrganization?: Maybe<Organization>;
  deleteOneOrganizationMember?: Maybe<OrganizationMember>;
  deleteOnePresentation?: Maybe<Presentation>;
  deleteOnePresentationRequest?: Maybe<PresentationRequest>;
  deleteOneUser?: Maybe<User>;
  login: AuthResponse;
  refresh: RefreshTokensResponse;
  register: AuthResponse;
  updateManyCredential: AffectedRowsOutput;
  updateManyCredentialRequest: AffectedRowsOutput;
  updateManyOrganization: AffectedRowsOutput;
  updateManyOrganizationMember: AffectedRowsOutput;
  updateManyPresentation: AffectedRowsOutput;
  updateManyPresentationRequest: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneCredential?: Maybe<Credential>;
  updateOneCredentialRequest?: Maybe<CredentialRequest>;
  updateOneOrganization?: Maybe<Organization>;
  updateOneOrganizationMember?: Maybe<OrganizationMember>;
  updateOnePresentation?: Maybe<Presentation>;
  updateOnePresentationRequest?: Maybe<PresentationRequest>;
  updateOneUser?: Maybe<User>;
  upsertOneCredential: Credential;
  upsertOneCredentialRequest: CredentialRequest;
  upsertOneOrganization: Organization;
  upsertOneOrganizationMember: OrganizationMember;
  upsertOnePresentation: Presentation;
  upsertOnePresentationRequest: PresentationRequest;
  upsertOneUser: User;
};


export type MutationCreateManyCredentialArgs = {
  data: Array<CredentialCreateManyInput>;
};


export type MutationCreateManyCredentialRequestArgs = {
  data: Array<CredentialRequestCreateManyInput>;
};


export type MutationCreateManyOrganizationArgs = {
  data: Array<OrganizationCreateManyInput>;
};


export type MutationCreateManyOrganizationMemberArgs = {
  data: Array<OrganizationMemberCreateManyInput>;
};


export type MutationCreateManyPresentationArgs = {
  data: Array<PresentationCreateManyInput>;
};


export type MutationCreateManyPresentationRequestArgs = {
  data: Array<PresentationRequestCreateManyInput>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
};


export type MutationCreateOneCredentialArgs = {
  data: CredentialCreateInput;
};


export type MutationCreateOneCredentialRequestArgs = {
  data: CredentialRequestCreateInput;
};


export type MutationCreateOneOrganizationArgs = {
  data: OrganizationCreateInput;
};


export type MutationCreateOneOrganizationMemberArgs = {
  data: OrganizationMemberCreateInput;
};


export type MutationCreateOnePresentationArgs = {
  data: PresentationCreateInput;
};


export type MutationCreateOnePresentationRequestArgs = {
  data: PresentationRequestCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyCredentialArgs = {
  where?: InputMaybe<CredentialWhereInput>;
};


export type MutationDeleteManyCredentialRequestArgs = {
  where?: InputMaybe<CredentialRequestWhereInput>;
};


export type MutationDeleteManyOrganizationArgs = {
  where?: InputMaybe<OrganizationWhereInput>;
};


export type MutationDeleteManyOrganizationMemberArgs = {
  where?: InputMaybe<OrganizationMemberWhereInput>;
};


export type MutationDeleteManyPresentationArgs = {
  where?: InputMaybe<PresentationWhereInput>;
};


export type MutationDeleteManyPresentationRequestArgs = {
  where?: InputMaybe<PresentationRequestWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneCredentialArgs = {
  where: CredentialWhereUniqueInput;
};


export type MutationDeleteOneCredentialRequestArgs = {
  where: CredentialRequestWhereUniqueInput;
};


export type MutationDeleteOneOrganizationArgs = {
  where: OrganizationWhereUniqueInput;
};


export type MutationDeleteOneOrganizationMemberArgs = {
  where: OrganizationMemberWhereUniqueInput;
};


export type MutationDeleteOnePresentationArgs = {
  where: PresentationWhereUniqueInput;
};


export type MutationDeleteOnePresentationRequestArgs = {
  where: PresentationRequestWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateManyCredentialArgs = {
  data: CredentialUpdateManyMutationInput;
  where?: InputMaybe<CredentialWhereInput>;
};


export type MutationUpdateManyCredentialRequestArgs = {
  data: CredentialRequestUpdateManyMutationInput;
  where?: InputMaybe<CredentialRequestWhereInput>;
};


export type MutationUpdateManyOrganizationArgs = {
  data: OrganizationUpdateManyMutationInput;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type MutationUpdateManyOrganizationMemberArgs = {
  data: OrganizationMemberUpdateManyMutationInput;
  where?: InputMaybe<OrganizationMemberWhereInput>;
};


export type MutationUpdateManyPresentationArgs = {
  data: PresentationUpdateManyMutationInput;
  where?: InputMaybe<PresentationWhereInput>;
};


export type MutationUpdateManyPresentationRequestArgs = {
  data: PresentationRequestUpdateManyMutationInput;
  where?: InputMaybe<PresentationRequestWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneCredentialArgs = {
  data: CredentialUpdateInput;
  where: CredentialWhereUniqueInput;
};


export type MutationUpdateOneCredentialRequestArgs = {
  data: CredentialRequestUpdateInput;
  where: CredentialRequestWhereUniqueInput;
};


export type MutationUpdateOneOrganizationArgs = {
  data: OrganizationUpdateInput;
  where: OrganizationWhereUniqueInput;
};


export type MutationUpdateOneOrganizationMemberArgs = {
  data: OrganizationMemberUpdateInput;
  where: OrganizationMemberWhereUniqueInput;
};


export type MutationUpdateOnePresentationArgs = {
  data: PresentationUpdateInput;
  where: PresentationWhereUniqueInput;
};


export type MutationUpdateOnePresentationRequestArgs = {
  data: PresentationRequestUpdateInput;
  where: PresentationRequestWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneCredentialArgs = {
  create: CredentialCreateInput;
  update: CredentialUpdateInput;
  where: CredentialWhereUniqueInput;
};


export type MutationUpsertOneCredentialRequestArgs = {
  create: CredentialRequestCreateInput;
  update: CredentialRequestUpdateInput;
  where: CredentialRequestWhereUniqueInput;
};


export type MutationUpsertOneOrganizationArgs = {
  create: OrganizationCreateInput;
  update: OrganizationUpdateInput;
  where: OrganizationWhereUniqueInput;
};


export type MutationUpsertOneOrganizationMemberArgs = {
  create: OrganizationMemberCreateInput;
  update: OrganizationMemberUpdateInput;
  where: OrganizationMemberWhereUniqueInput;
};


export type MutationUpsertOnePresentationArgs = {
  create: PresentationCreateInput;
  update: PresentationUpdateInput;
  where: PresentationWhereUniqueInput;
};


export type MutationUpsertOnePresentationRequestArgs = {
  create: PresentationRequestCreateInput;
  update: PresentationRequestUpdateInput;
  where: PresentationRequestWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedJsonFilter = {
  equals?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type Organization = {
  __typename?: 'Organization';
  _count?: Maybe<OrganizationCount>;
  createdAt?: Maybe<Scalars['DateTime']>;
  credentialRequests: Array<CredentialRequest>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  issuedCredentials: Array<Credential>;
  logoUrl?: Maybe<Scalars['String']>;
  memberships: Array<OrganizationMember>;
  name: Scalars['String'];
  presentationRequests: Array<PresentationRequest>;
  receivedPresentations: Array<Presentation>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified: Scalars['Boolean'];
};


export type OrganizationCredentialRequestsArgs = {
  cursor?: InputMaybe<CredentialRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<CredentialRequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CredentialRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CredentialRequestWhereInput>;
};


export type OrganizationIssuedCredentialsArgs = {
  cursor?: InputMaybe<CredentialWhereUniqueInput>;
  distinct?: InputMaybe<Array<CredentialScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CredentialOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CredentialWhereInput>;
};


export type OrganizationMembershipsArgs = {
  cursor?: InputMaybe<OrganizationMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationMemberWhereInput>;
};


export type OrganizationPresentationRequestsArgs = {
  cursor?: InputMaybe<PresentationRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<PresentationRequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PresentationRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationRequestWhereInput>;
};


export type OrganizationReceivedPresentationsArgs = {
  cursor?: InputMaybe<PresentationWhereUniqueInput>;
  distinct?: InputMaybe<Array<PresentationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PresentationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationWhereInput>;
};

export type OrganizationCount = {
  __typename?: 'OrganizationCount';
  credentialRequests: Scalars['Int'];
  issuedCredentials: Scalars['Int'];
  memberships: Scalars['Int'];
  presentationRequests: Scalars['Int'];
  receivedPresentations: Scalars['Int'];
};

export type OrganizationCountAggregate = {
  __typename?: 'OrganizationCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  logoUrl: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
  verified: Scalars['Int'];
};

export type OrganizationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logoUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  verified?: InputMaybe<SortOrder>;
};

export type OrganizationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialRequests?: InputMaybe<CredentialRequestCreateNestedManyWithoutIssuerInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  issuedCredentials?: InputMaybe<CredentialCreateNestedManyWithoutOrganizationInput>;
  logoUrl?: InputMaybe<Scalars['String']>;
  memberships?: InputMaybe<OrganizationMemberCreateNestedManyWithoutOrganizationInput>;
  name?: InputMaybe<Scalars['String']>;
  presentationRequests?: InputMaybe<PresentationRequestCreateNestedManyWithoutVerifierInput>;
  receivedPresentations?: InputMaybe<PresentationCreateNestedManyWithoutOrganizationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationCreateNestedOneWithoutCredentialRequestsInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutCredentialRequestsInput>;
  create?: InputMaybe<OrganizationCreateWithoutCredentialRequestsInput>;
};

export type OrganizationCreateNestedOneWithoutIssuedCredentialsInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutIssuedCredentialsInput>;
  create?: InputMaybe<OrganizationCreateWithoutIssuedCredentialsInput>;
};

export type OrganizationCreateNestedOneWithoutMembershipsInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutMembershipsInput>;
  create?: InputMaybe<OrganizationCreateWithoutMembershipsInput>;
};

export type OrganizationCreateNestedOneWithoutPresentationRequestsInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutPresentationRequestsInput>;
  create?: InputMaybe<OrganizationCreateWithoutPresentationRequestsInput>;
};

export type OrganizationCreateNestedOneWithoutReceivedPresentationsInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutReceivedPresentationsInput>;
  create?: InputMaybe<OrganizationCreateWithoutReceivedPresentationsInput>;
};

export type OrganizationCreateOrConnectWithoutCredentialRequestsInput = {
  create: OrganizationCreateWithoutCredentialRequestsInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationCreateOrConnectWithoutIssuedCredentialsInput = {
  create: OrganizationCreateWithoutIssuedCredentialsInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationCreateOrConnectWithoutMembershipsInput = {
  create: OrganizationCreateWithoutMembershipsInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationCreateOrConnectWithoutPresentationRequestsInput = {
  create: OrganizationCreateWithoutPresentationRequestsInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationCreateOrConnectWithoutReceivedPresentationsInput = {
  create: OrganizationCreateWithoutReceivedPresentationsInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationCreateWithoutCredentialRequestsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  issuedCredentials?: InputMaybe<CredentialCreateNestedManyWithoutOrganizationInput>;
  logoUrl?: InputMaybe<Scalars['String']>;
  memberships?: InputMaybe<OrganizationMemberCreateNestedManyWithoutOrganizationInput>;
  name?: InputMaybe<Scalars['String']>;
  presentationRequests?: InputMaybe<PresentationRequestCreateNestedManyWithoutVerifierInput>;
  receivedPresentations?: InputMaybe<PresentationCreateNestedManyWithoutOrganizationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationCreateWithoutIssuedCredentialsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialRequests?: InputMaybe<CredentialRequestCreateNestedManyWithoutIssuerInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  memberships?: InputMaybe<OrganizationMemberCreateNestedManyWithoutOrganizationInput>;
  name?: InputMaybe<Scalars['String']>;
  presentationRequests?: InputMaybe<PresentationRequestCreateNestedManyWithoutVerifierInput>;
  receivedPresentations?: InputMaybe<PresentationCreateNestedManyWithoutOrganizationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationCreateWithoutMembershipsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialRequests?: InputMaybe<CredentialRequestCreateNestedManyWithoutIssuerInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  issuedCredentials?: InputMaybe<CredentialCreateNestedManyWithoutOrganizationInput>;
  logoUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  presentationRequests?: InputMaybe<PresentationRequestCreateNestedManyWithoutVerifierInput>;
  receivedPresentations?: InputMaybe<PresentationCreateNestedManyWithoutOrganizationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationCreateWithoutPresentationRequestsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialRequests?: InputMaybe<CredentialRequestCreateNestedManyWithoutIssuerInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  issuedCredentials?: InputMaybe<CredentialCreateNestedManyWithoutOrganizationInput>;
  logoUrl?: InputMaybe<Scalars['String']>;
  memberships?: InputMaybe<OrganizationMemberCreateNestedManyWithoutOrganizationInput>;
  name?: InputMaybe<Scalars['String']>;
  receivedPresentations?: InputMaybe<PresentationCreateNestedManyWithoutOrganizationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationCreateWithoutReceivedPresentationsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialRequests?: InputMaybe<CredentialRequestCreateNestedManyWithoutIssuerInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  issuedCredentials?: InputMaybe<CredentialCreateNestedManyWithoutOrganizationInput>;
  logoUrl?: InputMaybe<Scalars['String']>;
  memberships?: InputMaybe<OrganizationMemberCreateNestedManyWithoutOrganizationInput>;
  name?: InputMaybe<Scalars['String']>;
  presentationRequests?: InputMaybe<PresentationRequestCreateNestedManyWithoutVerifierInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationGroupBy = {
  __typename?: 'OrganizationGroupBy';
  _count?: Maybe<OrganizationCountAggregate>;
  _max?: Maybe<OrganizationMaxAggregate>;
  _min?: Maybe<OrganizationMinAggregate>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logoUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified: Scalars['Boolean'];
};

export type OrganizationMaxAggregate = {
  __typename?: 'OrganizationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type OrganizationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logoUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  verified?: InputMaybe<SortOrder>;
};

export type OrganizationMember = {
  __typename?: 'OrganizationMember';
  _count?: Maybe<OrganizationMemberCount>;
  blocked: Scalars['Boolean'];
  canIssue: Scalars['Boolean'];
  canRequest: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  issuedCredentials: Array<Credential>;
  organization: Organization;
  organizationId: Scalars['String'];
  presentationRequests: Array<PresentationRequest>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};


export type OrganizationMemberIssuedCredentialsArgs = {
  cursor?: InputMaybe<CredentialWhereUniqueInput>;
  distinct?: InputMaybe<Array<CredentialScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CredentialOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CredentialWhereInput>;
};


export type OrganizationMemberPresentationRequestsArgs = {
  cursor?: InputMaybe<PresentationRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<PresentationRequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PresentationRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationRequestWhereInput>;
};

export type OrganizationMemberCount = {
  __typename?: 'OrganizationMemberCount';
  issuedCredentials: Scalars['Int'];
  presentationRequests: Scalars['Int'];
};

export type OrganizationMemberCountAggregate = {
  __typename?: 'OrganizationMemberCountAggregate';
  _all: Scalars['Int'];
  blocked: Scalars['Int'];
  canIssue: Scalars['Int'];
  canRequest: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  organizationId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type OrganizationMemberCountOrderByAggregateInput = {
  blocked?: InputMaybe<SortOrder>;
  canIssue?: InputMaybe<SortOrder>;
  canRequest?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OrganizationMemberCreateInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  canIssue?: InputMaybe<Scalars['Boolean']>;
  canRequest?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  issuedCredentials?: InputMaybe<CredentialCreateNestedManyWithoutIssuerInput>;
  organization: OrganizationCreateNestedOneWithoutMembershipsInput;
  presentationRequests?: InputMaybe<PresentationRequestCreateNestedManyWithoutRequestedByInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutMembershipsInput>;
};

export type OrganizationMemberCreateManyInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  canIssue?: InputMaybe<Scalars['Boolean']>;
  canRequest?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  organizationId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type OrganizationMemberCreateManyOrganizationInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  canIssue?: InputMaybe<Scalars['Boolean']>;
  canRequest?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type OrganizationMemberCreateManyOrganizationInputEnvelope = {
  data: Array<OrganizationMemberCreateManyOrganizationInput>;
};

export type OrganizationMemberCreateManyUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  canIssue?: InputMaybe<Scalars['Boolean']>;
  canRequest?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  organizationId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrganizationMemberCreateManyUserInputEnvelope = {
  data: Array<OrganizationMemberCreateManyUserInput>;
};

export type OrganizationMemberCreateNestedManyWithoutOrganizationInput = {
  connect?: InputMaybe<Array<OrganizationMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationMemberCreateOrConnectWithoutOrganizationInput>>;
  create?: InputMaybe<Array<OrganizationMemberCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<OrganizationMemberCreateManyOrganizationInputEnvelope>;
};

export type OrganizationMemberCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<OrganizationMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<OrganizationMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<OrganizationMemberCreateManyUserInputEnvelope>;
};

export type OrganizationMemberCreateNestedOneWithoutIssuedCredentialsInput = {
  connect?: InputMaybe<OrganizationMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationMemberCreateOrConnectWithoutIssuedCredentialsInput>;
  create?: InputMaybe<OrganizationMemberCreateWithoutIssuedCredentialsInput>;
};

export type OrganizationMemberCreateNestedOneWithoutPresentationRequestsInput = {
  connect?: InputMaybe<OrganizationMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationMemberCreateOrConnectWithoutPresentationRequestsInput>;
  create?: InputMaybe<OrganizationMemberCreateWithoutPresentationRequestsInput>;
};

export type OrganizationMemberCreateOrConnectWithoutIssuedCredentialsInput = {
  create: OrganizationMemberCreateWithoutIssuedCredentialsInput;
  where: OrganizationMemberWhereUniqueInput;
};

export type OrganizationMemberCreateOrConnectWithoutOrganizationInput = {
  create: OrganizationMemberCreateWithoutOrganizationInput;
  where: OrganizationMemberWhereUniqueInput;
};

export type OrganizationMemberCreateOrConnectWithoutPresentationRequestsInput = {
  create: OrganizationMemberCreateWithoutPresentationRequestsInput;
  where: OrganizationMemberWhereUniqueInput;
};

export type OrganizationMemberCreateOrConnectWithoutUserInput = {
  create: OrganizationMemberCreateWithoutUserInput;
  where: OrganizationMemberWhereUniqueInput;
};

export type OrganizationMemberCreateWithoutIssuedCredentialsInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  canIssue?: InputMaybe<Scalars['Boolean']>;
  canRequest?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  organization: OrganizationCreateNestedOneWithoutMembershipsInput;
  presentationRequests?: InputMaybe<PresentationRequestCreateNestedManyWithoutRequestedByInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutMembershipsInput>;
};

export type OrganizationMemberCreateWithoutOrganizationInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  canIssue?: InputMaybe<Scalars['Boolean']>;
  canRequest?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  issuedCredentials?: InputMaybe<CredentialCreateNestedManyWithoutIssuerInput>;
  presentationRequests?: InputMaybe<PresentationRequestCreateNestedManyWithoutRequestedByInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutMembershipsInput>;
};

export type OrganizationMemberCreateWithoutPresentationRequestsInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  canIssue?: InputMaybe<Scalars['Boolean']>;
  canRequest?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  issuedCredentials?: InputMaybe<CredentialCreateNestedManyWithoutIssuerInput>;
  organization: OrganizationCreateNestedOneWithoutMembershipsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutMembershipsInput>;
};

export type OrganizationMemberCreateWithoutUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  canIssue?: InputMaybe<Scalars['Boolean']>;
  canRequest?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  issuedCredentials?: InputMaybe<CredentialCreateNestedManyWithoutIssuerInput>;
  organization: OrganizationCreateNestedOneWithoutMembershipsInput;
  presentationRequests?: InputMaybe<PresentationRequestCreateNestedManyWithoutRequestedByInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrganizationMemberGroupBy = {
  __typename?: 'OrganizationMemberGroupBy';
  _count?: Maybe<OrganizationMemberCountAggregate>;
  _max?: Maybe<OrganizationMemberMaxAggregate>;
  _min?: Maybe<OrganizationMemberMinAggregate>;
  blocked: Scalars['Boolean'];
  canIssue: Scalars['Boolean'];
  canRequest: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  organizationId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type OrganizationMemberListRelationFilter = {
  every?: InputMaybe<OrganizationMemberWhereInput>;
  none?: InputMaybe<OrganizationMemberWhereInput>;
  some?: InputMaybe<OrganizationMemberWhereInput>;
};

export type OrganizationMemberMaxAggregate = {
  __typename?: 'OrganizationMemberMaxAggregate';
  blocked?: Maybe<Scalars['Boolean']>;
  canIssue?: Maybe<Scalars['Boolean']>;
  canRequest?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type OrganizationMemberMaxOrderByAggregateInput = {
  blocked?: InputMaybe<SortOrder>;
  canIssue?: InputMaybe<SortOrder>;
  canRequest?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OrganizationMemberMinAggregate = {
  __typename?: 'OrganizationMemberMinAggregate';
  blocked?: Maybe<Scalars['Boolean']>;
  canIssue?: Maybe<Scalars['Boolean']>;
  canRequest?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type OrganizationMemberMinOrderByAggregateInput = {
  blocked?: InputMaybe<SortOrder>;
  canIssue?: InputMaybe<SortOrder>;
  canRequest?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OrganizationMemberOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrganizationMemberOrderByWithAggregationInput = {
  _count?: InputMaybe<OrganizationMemberCountOrderByAggregateInput>;
  _max?: InputMaybe<OrganizationMemberMaxOrderByAggregateInput>;
  _min?: InputMaybe<OrganizationMemberMinOrderByAggregateInput>;
  blocked?: InputMaybe<SortOrder>;
  canIssue?: InputMaybe<SortOrder>;
  canRequest?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OrganizationMemberOrderByWithRelationInput = {
  blocked?: InputMaybe<SortOrder>;
  canIssue?: InputMaybe<SortOrder>;
  canRequest?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuedCredentials?: InputMaybe<CredentialOrderByRelationAggregateInput>;
  organization?: InputMaybe<OrganizationOrderByWithRelationInput>;
  organizationId?: InputMaybe<SortOrder>;
  presentationRequests?: InputMaybe<PresentationRequestOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type OrganizationMemberRelationFilter = {
  is?: InputMaybe<OrganizationMemberWhereInput>;
  isNot?: InputMaybe<OrganizationMemberWhereInput>;
};

export enum OrganizationMemberScalarFieldEnum {
  Blocked = 'blocked',
  CanIssue = 'canIssue',
  CanRequest = 'canRequest',
  CreatedAt = 'createdAt',
  Id = 'id',
  OrganizationId = 'organizationId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type OrganizationMemberScalarWhereInput = {
  AND?: InputMaybe<Array<OrganizationMemberScalarWhereInput>>;
  NOT?: InputMaybe<Array<OrganizationMemberScalarWhereInput>>;
  OR?: InputMaybe<Array<OrganizationMemberScalarWhereInput>>;
  blocked?: InputMaybe<BoolFilter>;
  canIssue?: InputMaybe<BoolFilter>;
  canRequest?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  organizationId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type OrganizationMemberScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OrganizationMemberScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OrganizationMemberScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OrganizationMemberScalarWhereWithAggregatesInput>>;
  blocked?: InputMaybe<BoolWithAggregatesFilter>;
  canIssue?: InputMaybe<BoolWithAggregatesFilter>;
  canRequest?: InputMaybe<BoolWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  organizationId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  userId?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type OrganizationMemberUpdateInput = {
  blocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canIssue?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canRequest?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  issuedCredentials?: InputMaybe<CredentialUpdateManyWithoutIssuerNestedInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutMembershipsNestedInput>;
  presentationRequests?: InputMaybe<PresentationRequestUpdateManyWithoutRequestedByNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutMembershipsNestedInput>;
};

export type OrganizationMemberUpdateManyMutationInput = {
  blocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canIssue?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canRequest?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput = {
  data: OrganizationMemberUpdateManyMutationInput;
  where: OrganizationMemberScalarWhereInput;
};

export type OrganizationMemberUpdateManyWithWhereWithoutUserInput = {
  data: OrganizationMemberUpdateManyMutationInput;
  where: OrganizationMemberScalarWhereInput;
};

export type OrganizationMemberUpdateManyWithoutOrganizationNestedInput = {
  connect?: InputMaybe<Array<OrganizationMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationMemberCreateOrConnectWithoutOrganizationInput>>;
  create?: InputMaybe<Array<OrganizationMemberCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<OrganizationMemberCreateManyOrganizationInputEnvelope>;
  delete?: InputMaybe<Array<OrganizationMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrganizationMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrganizationMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<OrganizationMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput>>;
  updateMany?: InputMaybe<Array<OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput>>;
  upsert?: InputMaybe<Array<OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput>>;
};

export type OrganizationMemberUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<OrganizationMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<OrganizationMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<OrganizationMemberCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<OrganizationMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrganizationMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrganizationMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<OrganizationMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<OrganizationMemberUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<OrganizationMemberUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<OrganizationMemberUpsertWithWhereUniqueWithoutUserInput>>;
};

export type OrganizationMemberUpdateOneRequiredWithoutIssuedCredentialsNestedInput = {
  connect?: InputMaybe<OrganizationMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationMemberCreateOrConnectWithoutIssuedCredentialsInput>;
  create?: InputMaybe<OrganizationMemberCreateWithoutIssuedCredentialsInput>;
  update?: InputMaybe<OrganizationMemberUpdateWithoutIssuedCredentialsInput>;
  upsert?: InputMaybe<OrganizationMemberUpsertWithoutIssuedCredentialsInput>;
};

export type OrganizationMemberUpdateOneRequiredWithoutPresentationRequestsNestedInput = {
  connect?: InputMaybe<OrganizationMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationMemberCreateOrConnectWithoutPresentationRequestsInput>;
  create?: InputMaybe<OrganizationMemberCreateWithoutPresentationRequestsInput>;
  update?: InputMaybe<OrganizationMemberUpdateWithoutPresentationRequestsInput>;
  upsert?: InputMaybe<OrganizationMemberUpsertWithoutPresentationRequestsInput>;
};

export type OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput = {
  data: OrganizationMemberUpdateWithoutOrganizationInput;
  where: OrganizationMemberWhereUniqueInput;
};

export type OrganizationMemberUpdateWithWhereUniqueWithoutUserInput = {
  data: OrganizationMemberUpdateWithoutUserInput;
  where: OrganizationMemberWhereUniqueInput;
};

export type OrganizationMemberUpdateWithoutIssuedCredentialsInput = {
  blocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canIssue?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canRequest?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutMembershipsNestedInput>;
  presentationRequests?: InputMaybe<PresentationRequestUpdateManyWithoutRequestedByNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutMembershipsNestedInput>;
};

export type OrganizationMemberUpdateWithoutOrganizationInput = {
  blocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canIssue?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canRequest?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  issuedCredentials?: InputMaybe<CredentialUpdateManyWithoutIssuerNestedInput>;
  presentationRequests?: InputMaybe<PresentationRequestUpdateManyWithoutRequestedByNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutMembershipsNestedInput>;
};

export type OrganizationMemberUpdateWithoutPresentationRequestsInput = {
  blocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canIssue?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canRequest?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  issuedCredentials?: InputMaybe<CredentialUpdateManyWithoutIssuerNestedInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutMembershipsNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutMembershipsNestedInput>;
};

export type OrganizationMemberUpdateWithoutUserInput = {
  blocked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canIssue?: InputMaybe<BoolFieldUpdateOperationsInput>;
  canRequest?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  issuedCredentials?: InputMaybe<CredentialUpdateManyWithoutIssuerNestedInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutMembershipsNestedInput>;
  presentationRequests?: InputMaybe<PresentationRequestUpdateManyWithoutRequestedByNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput = {
  create: OrganizationMemberCreateWithoutOrganizationInput;
  update: OrganizationMemberUpdateWithoutOrganizationInput;
  where: OrganizationMemberWhereUniqueInput;
};

export type OrganizationMemberUpsertWithWhereUniqueWithoutUserInput = {
  create: OrganizationMemberCreateWithoutUserInput;
  update: OrganizationMemberUpdateWithoutUserInput;
  where: OrganizationMemberWhereUniqueInput;
};

export type OrganizationMemberUpsertWithoutIssuedCredentialsInput = {
  create: OrganizationMemberCreateWithoutIssuedCredentialsInput;
  update: OrganizationMemberUpdateWithoutIssuedCredentialsInput;
};

export type OrganizationMemberUpsertWithoutPresentationRequestsInput = {
  create: OrganizationMemberCreateWithoutPresentationRequestsInput;
  update: OrganizationMemberUpdateWithoutPresentationRequestsInput;
};

export type OrganizationMemberWhereInput = {
  AND?: InputMaybe<Array<OrganizationMemberWhereInput>>;
  NOT?: InputMaybe<Array<OrganizationMemberWhereInput>>;
  OR?: InputMaybe<Array<OrganizationMemberWhereInput>>;
  blocked?: InputMaybe<BoolFilter>;
  canIssue?: InputMaybe<BoolFilter>;
  canRequest?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  issuedCredentials?: InputMaybe<CredentialListRelationFilter>;
  organization?: InputMaybe<OrganizationRelationFilter>;
  organizationId?: InputMaybe<StringFilter>;
  presentationRequests?: InputMaybe<PresentationRequestListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type OrganizationMemberWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type OrganizationMinAggregate = {
  __typename?: 'OrganizationMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type OrganizationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logoUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  verified?: InputMaybe<SortOrder>;
};

export type OrganizationOrderByWithAggregationInput = {
  _count?: InputMaybe<OrganizationCountOrderByAggregateInput>;
  _max?: InputMaybe<OrganizationMaxOrderByAggregateInput>;
  _min?: InputMaybe<OrganizationMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logoUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  verified?: InputMaybe<SortOrder>;
};

export type OrganizationOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  credentialRequests?: InputMaybe<CredentialRequestOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuedCredentials?: InputMaybe<CredentialOrderByRelationAggregateInput>;
  logoUrl?: InputMaybe<SortOrder>;
  memberships?: InputMaybe<OrganizationMemberOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  presentationRequests?: InputMaybe<PresentationRequestOrderByRelationAggregateInput>;
  receivedPresentations?: InputMaybe<PresentationOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  verified?: InputMaybe<SortOrder>;
};

export type OrganizationRelationFilter = {
  is?: InputMaybe<OrganizationWhereInput>;
  isNot?: InputMaybe<OrganizationWhereInput>;
};

export enum OrganizationScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  LogoUrl = 'logoUrl',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  Verified = 'verified'
}

export type OrganizationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OrganizationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OrganizationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OrganizationScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  logoUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  verified?: InputMaybe<BoolWithAggregatesFilter>;
};

export type OrganizationUpdateInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  credentialRequests?: InputMaybe<CredentialRequestUpdateManyWithoutIssuerNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  issuedCredentials?: InputMaybe<CredentialUpdateManyWithoutOrganizationNestedInput>;
  logoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberships?: InputMaybe<OrganizationMemberUpdateManyWithoutOrganizationNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  presentationRequests?: InputMaybe<PresentationRequestUpdateManyWithoutVerifierNestedInput>;
  receivedPresentations?: InputMaybe<PresentationUpdateManyWithoutOrganizationNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  verified?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type OrganizationUpdateManyMutationInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  verified?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type OrganizationUpdateOneRequiredWithoutCredentialRequestsNestedInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutCredentialRequestsInput>;
  create?: InputMaybe<OrganizationCreateWithoutCredentialRequestsInput>;
  update?: InputMaybe<OrganizationUpdateWithoutCredentialRequestsInput>;
  upsert?: InputMaybe<OrganizationUpsertWithoutCredentialRequestsInput>;
};

export type OrganizationUpdateOneRequiredWithoutIssuedCredentialsNestedInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutIssuedCredentialsInput>;
  create?: InputMaybe<OrganizationCreateWithoutIssuedCredentialsInput>;
  update?: InputMaybe<OrganizationUpdateWithoutIssuedCredentialsInput>;
  upsert?: InputMaybe<OrganizationUpsertWithoutIssuedCredentialsInput>;
};

export type OrganizationUpdateOneRequiredWithoutMembershipsNestedInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutMembershipsInput>;
  create?: InputMaybe<OrganizationCreateWithoutMembershipsInput>;
  update?: InputMaybe<OrganizationUpdateWithoutMembershipsInput>;
  upsert?: InputMaybe<OrganizationUpsertWithoutMembershipsInput>;
};

export type OrganizationUpdateOneRequiredWithoutPresentationRequestsNestedInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutPresentationRequestsInput>;
  create?: InputMaybe<OrganizationCreateWithoutPresentationRequestsInput>;
  update?: InputMaybe<OrganizationUpdateWithoutPresentationRequestsInput>;
  upsert?: InputMaybe<OrganizationUpsertWithoutPresentationRequestsInput>;
};

export type OrganizationUpdateOneRequiredWithoutReceivedPresentationsNestedInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutReceivedPresentationsInput>;
  create?: InputMaybe<OrganizationCreateWithoutReceivedPresentationsInput>;
  update?: InputMaybe<OrganizationUpdateWithoutReceivedPresentationsInput>;
  upsert?: InputMaybe<OrganizationUpsertWithoutReceivedPresentationsInput>;
};

export type OrganizationUpdateWithoutCredentialRequestsInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  issuedCredentials?: InputMaybe<CredentialUpdateManyWithoutOrganizationNestedInput>;
  logoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberships?: InputMaybe<OrganizationMemberUpdateManyWithoutOrganizationNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  presentationRequests?: InputMaybe<PresentationRequestUpdateManyWithoutVerifierNestedInput>;
  receivedPresentations?: InputMaybe<PresentationUpdateManyWithoutOrganizationNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  verified?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type OrganizationUpdateWithoutIssuedCredentialsInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  credentialRequests?: InputMaybe<CredentialRequestUpdateManyWithoutIssuerNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  logoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberships?: InputMaybe<OrganizationMemberUpdateManyWithoutOrganizationNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  presentationRequests?: InputMaybe<PresentationRequestUpdateManyWithoutVerifierNestedInput>;
  receivedPresentations?: InputMaybe<PresentationUpdateManyWithoutOrganizationNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  verified?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type OrganizationUpdateWithoutMembershipsInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  credentialRequests?: InputMaybe<CredentialRequestUpdateManyWithoutIssuerNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  issuedCredentials?: InputMaybe<CredentialUpdateManyWithoutOrganizationNestedInput>;
  logoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  presentationRequests?: InputMaybe<PresentationRequestUpdateManyWithoutVerifierNestedInput>;
  receivedPresentations?: InputMaybe<PresentationUpdateManyWithoutOrganizationNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  verified?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type OrganizationUpdateWithoutPresentationRequestsInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  credentialRequests?: InputMaybe<CredentialRequestUpdateManyWithoutIssuerNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  issuedCredentials?: InputMaybe<CredentialUpdateManyWithoutOrganizationNestedInput>;
  logoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberships?: InputMaybe<OrganizationMemberUpdateManyWithoutOrganizationNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  receivedPresentations?: InputMaybe<PresentationUpdateManyWithoutOrganizationNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  verified?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type OrganizationUpdateWithoutReceivedPresentationsInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  credentialRequests?: InputMaybe<CredentialRequestUpdateManyWithoutIssuerNestedInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  issuedCredentials?: InputMaybe<CredentialUpdateManyWithoutOrganizationNestedInput>;
  logoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberships?: InputMaybe<OrganizationMemberUpdateManyWithoutOrganizationNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  presentationRequests?: InputMaybe<PresentationRequestUpdateManyWithoutVerifierNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  verified?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type OrganizationUpsertWithoutCredentialRequestsInput = {
  create: OrganizationCreateWithoutCredentialRequestsInput;
  update: OrganizationUpdateWithoutCredentialRequestsInput;
};

export type OrganizationUpsertWithoutIssuedCredentialsInput = {
  create: OrganizationCreateWithoutIssuedCredentialsInput;
  update: OrganizationUpdateWithoutIssuedCredentialsInput;
};

export type OrganizationUpsertWithoutMembershipsInput = {
  create: OrganizationCreateWithoutMembershipsInput;
  update: OrganizationUpdateWithoutMembershipsInput;
};

export type OrganizationUpsertWithoutPresentationRequestsInput = {
  create: OrganizationCreateWithoutPresentationRequestsInput;
  update: OrganizationUpdateWithoutPresentationRequestsInput;
};

export type OrganizationUpsertWithoutReceivedPresentationsInput = {
  create: OrganizationCreateWithoutReceivedPresentationsInput;
  update: OrganizationUpdateWithoutReceivedPresentationsInput;
};

export type OrganizationWhereInput = {
  AND?: InputMaybe<Array<OrganizationWhereInput>>;
  NOT?: InputMaybe<Array<OrganizationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  credentialRequests?: InputMaybe<CredentialRequestListRelationFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  issuedCredentials?: InputMaybe<CredentialListRelationFilter>;
  logoUrl?: InputMaybe<StringNullableFilter>;
  memberships?: InputMaybe<OrganizationMemberListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  presentationRequests?: InputMaybe<PresentationRequestListRelationFilter>;
  receivedPresentations?: InputMaybe<PresentationListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  verified?: InputMaybe<BoolFilter>;
};

export type OrganizationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Presentation = {
  __typename?: 'Presentation';
  createdAt: Scalars['DateTime'];
  expiryDate: Scalars['DateTime'];
  holderConsent: Scalars['Boolean'];
  id: Scalars['String'];
  issuerConsent: Scalars['Boolean'];
  organization: Organization;
  organizationId: Scalars['String'];
  payload: Scalars['JSON'];
  request?: Maybe<PresentationRequest>;
  requestId?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type PresentationCountAggregate = {
  __typename?: 'PresentationCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  expiryDate: Scalars['Int'];
  holderConsent: Scalars['Int'];
  id: Scalars['Int'];
  issuerConsent: Scalars['Int'];
  organizationId: Scalars['Int'];
  payload: Scalars['Int'];
  requestId: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type PresentationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrder>;
  holderConsent?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuerConsent?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  payload?: InputMaybe<SortOrder>;
  requestId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PresentationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  organization: OrganizationCreateNestedOneWithoutReceivedPresentationsInput;
  payload: Scalars['JSON'];
  request?: InputMaybe<PresentationRequestCreateNestedOneWithoutPresentationInput>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutPresentationsInput;
};

export type PresentationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  organizationId: Scalars['String'];
  payload: Scalars['JSON'];
  requestId?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type PresentationCreateManyOrganizationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  payload: Scalars['JSON'];
  requestId?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type PresentationCreateManyOrganizationInputEnvelope = {
  data: Array<PresentationCreateManyOrganizationInput>;
};

export type PresentationCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  organizationId: Scalars['String'];
  payload: Scalars['JSON'];
  requestId?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PresentationCreateManyUserInputEnvelope = {
  data: Array<PresentationCreateManyUserInput>;
};

export type PresentationCreateNestedManyWithoutOrganizationInput = {
  connect?: InputMaybe<Array<PresentationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PresentationCreateOrConnectWithoutOrganizationInput>>;
  create?: InputMaybe<Array<PresentationCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<PresentationCreateManyOrganizationInputEnvelope>;
};

export type PresentationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PresentationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PresentationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PresentationCreateWithoutUserInput>>;
  createMany?: InputMaybe<PresentationCreateManyUserInputEnvelope>;
};

export type PresentationCreateNestedOneWithoutRequestInput = {
  connect?: InputMaybe<PresentationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PresentationCreateOrConnectWithoutRequestInput>;
  create?: InputMaybe<PresentationCreateWithoutRequestInput>;
};

export type PresentationCreateOrConnectWithoutOrganizationInput = {
  create: PresentationCreateWithoutOrganizationInput;
  where: PresentationWhereUniqueInput;
};

export type PresentationCreateOrConnectWithoutRequestInput = {
  create: PresentationCreateWithoutRequestInput;
  where: PresentationWhereUniqueInput;
};

export type PresentationCreateOrConnectWithoutUserInput = {
  create: PresentationCreateWithoutUserInput;
  where: PresentationWhereUniqueInput;
};

export type PresentationCreateWithoutOrganizationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  payload: Scalars['JSON'];
  request?: InputMaybe<PresentationRequestCreateNestedOneWithoutPresentationInput>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutPresentationsInput;
};

export type PresentationCreateWithoutRequestInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  organization: OrganizationCreateNestedOneWithoutReceivedPresentationsInput;
  payload: Scalars['JSON'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutPresentationsInput;
};

export type PresentationCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiryDate: Scalars['DateTime'];
  holderConsent?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  issuerConsent?: InputMaybe<Scalars['Boolean']>;
  organization: OrganizationCreateNestedOneWithoutReceivedPresentationsInput;
  payload: Scalars['JSON'];
  request?: InputMaybe<PresentationRequestCreateNestedOneWithoutPresentationInput>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PresentationGroupBy = {
  __typename?: 'PresentationGroupBy';
  _count?: Maybe<PresentationCountAggregate>;
  _max?: Maybe<PresentationMaxAggregate>;
  _min?: Maybe<PresentationMinAggregate>;
  createdAt: Scalars['DateTime'];
  expiryDate: Scalars['DateTime'];
  holderConsent: Scalars['Boolean'];
  id: Scalars['String'];
  issuerConsent: Scalars['Boolean'];
  organizationId: Scalars['String'];
  payload: Scalars['JSON'];
  requestId?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type PresentationListRelationFilter = {
  every?: InputMaybe<PresentationWhereInput>;
  none?: InputMaybe<PresentationWhereInput>;
  some?: InputMaybe<PresentationWhereInput>;
};

export type PresentationMaxAggregate = {
  __typename?: 'PresentationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expiryDate?: Maybe<Scalars['DateTime']>;
  holderConsent?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  issuerConsent?: Maybe<Scalars['Boolean']>;
  organizationId?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type PresentationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrder>;
  holderConsent?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuerConsent?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  requestId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PresentationMinAggregate = {
  __typename?: 'PresentationMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expiryDate?: Maybe<Scalars['DateTime']>;
  holderConsent?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  issuerConsent?: Maybe<Scalars['Boolean']>;
  organizationId?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type PresentationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrder>;
  holderConsent?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuerConsent?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  requestId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PresentationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PresentationOrderByWithAggregationInput = {
  _count?: InputMaybe<PresentationCountOrderByAggregateInput>;
  _max?: InputMaybe<PresentationMaxOrderByAggregateInput>;
  _min?: InputMaybe<PresentationMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrder>;
  holderConsent?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuerConsent?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  payload?: InputMaybe<SortOrder>;
  requestId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PresentationOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiryDate?: InputMaybe<SortOrder>;
  holderConsent?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issuerConsent?: InputMaybe<SortOrder>;
  organization?: InputMaybe<OrganizationOrderByWithRelationInput>;
  organizationId?: InputMaybe<SortOrder>;
  payload?: InputMaybe<SortOrder>;
  request?: InputMaybe<PresentationRequestOrderByWithRelationInput>;
  requestId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type PresentationRelationFilter = {
  is?: InputMaybe<PresentationWhereInput>;
  isNot?: InputMaybe<PresentationWhereInput>;
};

export type PresentationRequest = {
  __typename?: 'PresentationRequest';
  attributes: Scalars['JSON'];
  completed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  credentialType: Scalars['String'];
  id: Scalars['String'];
  organizationMemberId: Scalars['String'];
  presentation?: Maybe<Presentation>;
  requestedBy: OrganizationMember;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  valid: Scalars['Boolean'];
  verifier: Organization;
  verifierId: Scalars['String'];
};

export type PresentationRequestCountAggregate = {
  __typename?: 'PresentationRequestCountAggregate';
  _all: Scalars['Int'];
  attributes: Scalars['Int'];
  completed: Scalars['Int'];
  createdAt: Scalars['Int'];
  credentialType: Scalars['Int'];
  id: Scalars['Int'];
  organizationMemberId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
  valid: Scalars['Int'];
  verifierId: Scalars['Int'];
};

export type PresentationRequestCountOrderByAggregateInput = {
  attributes?: InputMaybe<SortOrder>;
  completed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  credentialType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  organizationMemberId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  valid?: InputMaybe<SortOrder>;
  verifierId?: InputMaybe<SortOrder>;
};

export type PresentationRequestCreateInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  presentation?: InputMaybe<PresentationCreateNestedOneWithoutRequestInput>;
  requestedBy: OrganizationMemberCreateNestedOneWithoutPresentationRequestsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutPresentationRequestsInput;
  valid?: InputMaybe<Scalars['Boolean']>;
  verifier: OrganizationCreateNestedOneWithoutPresentationRequestsInput;
};

export type PresentationRequestCreateManyInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  organizationMemberId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  valid?: InputMaybe<Scalars['Boolean']>;
  verifierId: Scalars['String'];
};

export type PresentationRequestCreateManyRequestedByInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  valid?: InputMaybe<Scalars['Boolean']>;
  verifierId: Scalars['String'];
};

export type PresentationRequestCreateManyRequestedByInputEnvelope = {
  data: Array<PresentationRequestCreateManyRequestedByInput>;
};

export type PresentationRequestCreateManyUserInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  organizationMemberId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  valid?: InputMaybe<Scalars['Boolean']>;
  verifierId: Scalars['String'];
};

export type PresentationRequestCreateManyUserInputEnvelope = {
  data: Array<PresentationRequestCreateManyUserInput>;
};

export type PresentationRequestCreateManyVerifierInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  organizationMemberId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  valid?: InputMaybe<Scalars['Boolean']>;
};

export type PresentationRequestCreateManyVerifierInputEnvelope = {
  data: Array<PresentationRequestCreateManyVerifierInput>;
};

export type PresentationRequestCreateNestedManyWithoutRequestedByInput = {
  connect?: InputMaybe<Array<PresentationRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PresentationRequestCreateOrConnectWithoutRequestedByInput>>;
  create?: InputMaybe<Array<PresentationRequestCreateWithoutRequestedByInput>>;
  createMany?: InputMaybe<PresentationRequestCreateManyRequestedByInputEnvelope>;
};

export type PresentationRequestCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PresentationRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PresentationRequestCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PresentationRequestCreateWithoutUserInput>>;
  createMany?: InputMaybe<PresentationRequestCreateManyUserInputEnvelope>;
};

export type PresentationRequestCreateNestedManyWithoutVerifierInput = {
  connect?: InputMaybe<Array<PresentationRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PresentationRequestCreateOrConnectWithoutVerifierInput>>;
  create?: InputMaybe<Array<PresentationRequestCreateWithoutVerifierInput>>;
  createMany?: InputMaybe<PresentationRequestCreateManyVerifierInputEnvelope>;
};

export type PresentationRequestCreateNestedOneWithoutPresentationInput = {
  connect?: InputMaybe<PresentationRequestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PresentationRequestCreateOrConnectWithoutPresentationInput>;
  create?: InputMaybe<PresentationRequestCreateWithoutPresentationInput>;
};

export type PresentationRequestCreateOrConnectWithoutPresentationInput = {
  create: PresentationRequestCreateWithoutPresentationInput;
  where: PresentationRequestWhereUniqueInput;
};

export type PresentationRequestCreateOrConnectWithoutRequestedByInput = {
  create: PresentationRequestCreateWithoutRequestedByInput;
  where: PresentationRequestWhereUniqueInput;
};

export type PresentationRequestCreateOrConnectWithoutUserInput = {
  create: PresentationRequestCreateWithoutUserInput;
  where: PresentationRequestWhereUniqueInput;
};

export type PresentationRequestCreateOrConnectWithoutVerifierInput = {
  create: PresentationRequestCreateWithoutVerifierInput;
  where: PresentationRequestWhereUniqueInput;
};

export type PresentationRequestCreateWithoutPresentationInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  requestedBy: OrganizationMemberCreateNestedOneWithoutPresentationRequestsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutPresentationRequestsInput;
  valid?: InputMaybe<Scalars['Boolean']>;
  verifier: OrganizationCreateNestedOneWithoutPresentationRequestsInput;
};

export type PresentationRequestCreateWithoutRequestedByInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  presentation?: InputMaybe<PresentationCreateNestedOneWithoutRequestInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutPresentationRequestsInput;
  valid?: InputMaybe<Scalars['Boolean']>;
  verifier: OrganizationCreateNestedOneWithoutPresentationRequestsInput;
};

export type PresentationRequestCreateWithoutUserInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  presentation?: InputMaybe<PresentationCreateNestedOneWithoutRequestInput>;
  requestedBy: OrganizationMemberCreateNestedOneWithoutPresentationRequestsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  valid?: InputMaybe<Scalars['Boolean']>;
  verifier: OrganizationCreateNestedOneWithoutPresentationRequestsInput;
};

export type PresentationRequestCreateWithoutVerifierInput = {
  attributes: Scalars['JSON'];
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialType: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  presentation?: InputMaybe<PresentationCreateNestedOneWithoutRequestInput>;
  requestedBy: OrganizationMemberCreateNestedOneWithoutPresentationRequestsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutPresentationRequestsInput;
  valid?: InputMaybe<Scalars['Boolean']>;
};

export type PresentationRequestGroupBy = {
  __typename?: 'PresentationRequestGroupBy';
  _count?: Maybe<PresentationRequestCountAggregate>;
  _max?: Maybe<PresentationRequestMaxAggregate>;
  _min?: Maybe<PresentationRequestMinAggregate>;
  attributes: Scalars['JSON'];
  completed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  credentialType: Scalars['String'];
  id: Scalars['String'];
  organizationMemberId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  valid: Scalars['Boolean'];
  verifierId: Scalars['String'];
};

export type PresentationRequestListRelationFilter = {
  every?: InputMaybe<PresentationRequestWhereInput>;
  none?: InputMaybe<PresentationRequestWhereInput>;
  some?: InputMaybe<PresentationRequestWhereInput>;
};

export type PresentationRequestMaxAggregate = {
  __typename?: 'PresentationRequestMaxAggregate';
  completed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  credentialType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  organizationMemberId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  valid?: Maybe<Scalars['Boolean']>;
  verifierId?: Maybe<Scalars['String']>;
};

export type PresentationRequestMaxOrderByAggregateInput = {
  completed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  credentialType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  organizationMemberId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  valid?: InputMaybe<SortOrder>;
  verifierId?: InputMaybe<SortOrder>;
};

export type PresentationRequestMinAggregate = {
  __typename?: 'PresentationRequestMinAggregate';
  completed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  credentialType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  organizationMemberId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  valid?: Maybe<Scalars['Boolean']>;
  verifierId?: Maybe<Scalars['String']>;
};

export type PresentationRequestMinOrderByAggregateInput = {
  completed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  credentialType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  organizationMemberId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  valid?: InputMaybe<SortOrder>;
  verifierId?: InputMaybe<SortOrder>;
};

export type PresentationRequestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PresentationRequestOrderByWithAggregationInput = {
  _count?: InputMaybe<PresentationRequestCountOrderByAggregateInput>;
  _max?: InputMaybe<PresentationRequestMaxOrderByAggregateInput>;
  _min?: InputMaybe<PresentationRequestMinOrderByAggregateInput>;
  attributes?: InputMaybe<SortOrder>;
  completed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  credentialType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  organizationMemberId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  valid?: InputMaybe<SortOrder>;
  verifierId?: InputMaybe<SortOrder>;
};

export type PresentationRequestOrderByWithRelationInput = {
  attributes?: InputMaybe<SortOrder>;
  completed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  credentialType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  organizationMemberId?: InputMaybe<SortOrder>;
  presentation?: InputMaybe<PresentationOrderByWithRelationInput>;
  requestedBy?: InputMaybe<OrganizationMemberOrderByWithRelationInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  valid?: InputMaybe<SortOrder>;
  verifier?: InputMaybe<OrganizationOrderByWithRelationInput>;
  verifierId?: InputMaybe<SortOrder>;
};

export type PresentationRequestRelationFilter = {
  is?: InputMaybe<PresentationRequestWhereInput>;
  isNot?: InputMaybe<PresentationRequestWhereInput>;
};

export enum PresentationRequestScalarFieldEnum {
  Attributes = 'attributes',
  Completed = 'completed',
  CreatedAt = 'createdAt',
  CredentialType = 'credentialType',
  Id = 'id',
  OrganizationMemberId = 'organizationMemberId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  Valid = 'valid',
  VerifierId = 'verifierId'
}

export type PresentationRequestScalarWhereInput = {
  AND?: InputMaybe<Array<PresentationRequestScalarWhereInput>>;
  NOT?: InputMaybe<Array<PresentationRequestScalarWhereInput>>;
  OR?: InputMaybe<Array<PresentationRequestScalarWhereInput>>;
  attributes?: InputMaybe<JsonFilter>;
  completed?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  credentialType?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  organizationMemberId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
  valid?: InputMaybe<BoolFilter>;
  verifierId?: InputMaybe<StringFilter>;
};

export type PresentationRequestScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PresentationRequestScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PresentationRequestScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PresentationRequestScalarWhereWithAggregatesInput>>;
  attributes?: InputMaybe<JsonWithAggregatesFilter>;
  completed?: InputMaybe<BoolWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  credentialType?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  organizationMemberId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  valid?: InputMaybe<BoolWithAggregatesFilter>;
  verifierId?: InputMaybe<StringWithAggregatesFilter>;
};

export type PresentationRequestUpdateInput = {
  attributes?: InputMaybe<Scalars['JSON']>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  credentialType?: InputMaybe<StringFieldUpdateOperationsInput>;
  presentation?: InputMaybe<PresentationUpdateOneWithoutRequestNestedInput>;
  requestedBy?: InputMaybe<OrganizationMemberUpdateOneRequiredWithoutPresentationRequestsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPresentationRequestsNestedInput>;
  valid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  verifier?: InputMaybe<OrganizationUpdateOneRequiredWithoutPresentationRequestsNestedInput>;
};

export type PresentationRequestUpdateManyMutationInput = {
  attributes?: InputMaybe<Scalars['JSON']>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  credentialType?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  valid?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type PresentationRequestUpdateManyWithWhereWithoutRequestedByInput = {
  data: PresentationRequestUpdateManyMutationInput;
  where: PresentationRequestScalarWhereInput;
};

export type PresentationRequestUpdateManyWithWhereWithoutUserInput = {
  data: PresentationRequestUpdateManyMutationInput;
  where: PresentationRequestScalarWhereInput;
};

export type PresentationRequestUpdateManyWithWhereWithoutVerifierInput = {
  data: PresentationRequestUpdateManyMutationInput;
  where: PresentationRequestScalarWhereInput;
};

export type PresentationRequestUpdateManyWithoutRequestedByNestedInput = {
  connect?: InputMaybe<Array<PresentationRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PresentationRequestCreateOrConnectWithoutRequestedByInput>>;
  create?: InputMaybe<Array<PresentationRequestCreateWithoutRequestedByInput>>;
  createMany?: InputMaybe<PresentationRequestCreateManyRequestedByInputEnvelope>;
  delete?: InputMaybe<Array<PresentationRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PresentationRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PresentationRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<PresentationRequestWhereUniqueInput>>;
  update?: InputMaybe<Array<PresentationRequestUpdateWithWhereUniqueWithoutRequestedByInput>>;
  updateMany?: InputMaybe<Array<PresentationRequestUpdateManyWithWhereWithoutRequestedByInput>>;
  upsert?: InputMaybe<Array<PresentationRequestUpsertWithWhereUniqueWithoutRequestedByInput>>;
};

export type PresentationRequestUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<PresentationRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PresentationRequestCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PresentationRequestCreateWithoutUserInput>>;
  createMany?: InputMaybe<PresentationRequestCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<PresentationRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PresentationRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PresentationRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<PresentationRequestWhereUniqueInput>>;
  update?: InputMaybe<Array<PresentationRequestUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<PresentationRequestUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<PresentationRequestUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PresentationRequestUpdateManyWithoutVerifierNestedInput = {
  connect?: InputMaybe<Array<PresentationRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PresentationRequestCreateOrConnectWithoutVerifierInput>>;
  create?: InputMaybe<Array<PresentationRequestCreateWithoutVerifierInput>>;
  createMany?: InputMaybe<PresentationRequestCreateManyVerifierInputEnvelope>;
  delete?: InputMaybe<Array<PresentationRequestWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PresentationRequestScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PresentationRequestWhereUniqueInput>>;
  set?: InputMaybe<Array<PresentationRequestWhereUniqueInput>>;
  update?: InputMaybe<Array<PresentationRequestUpdateWithWhereUniqueWithoutVerifierInput>>;
  updateMany?: InputMaybe<Array<PresentationRequestUpdateManyWithWhereWithoutVerifierInput>>;
  upsert?: InputMaybe<Array<PresentationRequestUpsertWithWhereUniqueWithoutVerifierInput>>;
};

export type PresentationRequestUpdateOneWithoutPresentationNestedInput = {
  connect?: InputMaybe<PresentationRequestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PresentationRequestCreateOrConnectWithoutPresentationInput>;
  create?: InputMaybe<PresentationRequestCreateWithoutPresentationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PresentationRequestUpdateWithoutPresentationInput>;
  upsert?: InputMaybe<PresentationRequestUpsertWithoutPresentationInput>;
};

export type PresentationRequestUpdateWithWhereUniqueWithoutRequestedByInput = {
  data: PresentationRequestUpdateWithoutRequestedByInput;
  where: PresentationRequestWhereUniqueInput;
};

export type PresentationRequestUpdateWithWhereUniqueWithoutUserInput = {
  data: PresentationRequestUpdateWithoutUserInput;
  where: PresentationRequestWhereUniqueInput;
};

export type PresentationRequestUpdateWithWhereUniqueWithoutVerifierInput = {
  data: PresentationRequestUpdateWithoutVerifierInput;
  where: PresentationRequestWhereUniqueInput;
};

export type PresentationRequestUpdateWithoutPresentationInput = {
  attributes?: InputMaybe<Scalars['JSON']>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  credentialType?: InputMaybe<StringFieldUpdateOperationsInput>;
  requestedBy?: InputMaybe<OrganizationMemberUpdateOneRequiredWithoutPresentationRequestsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPresentationRequestsNestedInput>;
  valid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  verifier?: InputMaybe<OrganizationUpdateOneRequiredWithoutPresentationRequestsNestedInput>;
};

export type PresentationRequestUpdateWithoutRequestedByInput = {
  attributes?: InputMaybe<Scalars['JSON']>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  credentialType?: InputMaybe<StringFieldUpdateOperationsInput>;
  presentation?: InputMaybe<PresentationUpdateOneWithoutRequestNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPresentationRequestsNestedInput>;
  valid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  verifier?: InputMaybe<OrganizationUpdateOneRequiredWithoutPresentationRequestsNestedInput>;
};

export type PresentationRequestUpdateWithoutUserInput = {
  attributes?: InputMaybe<Scalars['JSON']>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  credentialType?: InputMaybe<StringFieldUpdateOperationsInput>;
  presentation?: InputMaybe<PresentationUpdateOneWithoutRequestNestedInput>;
  requestedBy?: InputMaybe<OrganizationMemberUpdateOneRequiredWithoutPresentationRequestsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  valid?: InputMaybe<BoolFieldUpdateOperationsInput>;
  verifier?: InputMaybe<OrganizationUpdateOneRequiredWithoutPresentationRequestsNestedInput>;
};

export type PresentationRequestUpdateWithoutVerifierInput = {
  attributes?: InputMaybe<Scalars['JSON']>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  credentialType?: InputMaybe<StringFieldUpdateOperationsInput>;
  presentation?: InputMaybe<PresentationUpdateOneWithoutRequestNestedInput>;
  requestedBy?: InputMaybe<OrganizationMemberUpdateOneRequiredWithoutPresentationRequestsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPresentationRequestsNestedInput>;
  valid?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type PresentationRequestUpsertWithWhereUniqueWithoutRequestedByInput = {
  create: PresentationRequestCreateWithoutRequestedByInput;
  update: PresentationRequestUpdateWithoutRequestedByInput;
  where: PresentationRequestWhereUniqueInput;
};

export type PresentationRequestUpsertWithWhereUniqueWithoutUserInput = {
  create: PresentationRequestCreateWithoutUserInput;
  update: PresentationRequestUpdateWithoutUserInput;
  where: PresentationRequestWhereUniqueInput;
};

export type PresentationRequestUpsertWithWhereUniqueWithoutVerifierInput = {
  create: PresentationRequestCreateWithoutVerifierInput;
  update: PresentationRequestUpdateWithoutVerifierInput;
  where: PresentationRequestWhereUniqueInput;
};

export type PresentationRequestUpsertWithoutPresentationInput = {
  create: PresentationRequestCreateWithoutPresentationInput;
  update: PresentationRequestUpdateWithoutPresentationInput;
};

export type PresentationRequestWhereInput = {
  AND?: InputMaybe<Array<PresentationRequestWhereInput>>;
  NOT?: InputMaybe<Array<PresentationRequestWhereInput>>;
  OR?: InputMaybe<Array<PresentationRequestWhereInput>>;
  attributes?: InputMaybe<JsonFilter>;
  completed?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  credentialType?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  organizationMemberId?: InputMaybe<StringFilter>;
  presentation?: InputMaybe<PresentationRelationFilter>;
  requestedBy?: InputMaybe<OrganizationMemberRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  valid?: InputMaybe<BoolFilter>;
  verifier?: InputMaybe<OrganizationRelationFilter>;
  verifierId?: InputMaybe<StringFilter>;
};

export type PresentationRequestWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum PresentationScalarFieldEnum {
  CreatedAt = 'createdAt',
  ExpiryDate = 'expiryDate',
  HolderConsent = 'holderConsent',
  Id = 'id',
  IssuerConsent = 'issuerConsent',
  OrganizationId = 'organizationId',
  Payload = 'payload',
  RequestId = 'requestId',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type PresentationScalarWhereInput = {
  AND?: InputMaybe<Array<PresentationScalarWhereInput>>;
  NOT?: InputMaybe<Array<PresentationScalarWhereInput>>;
  OR?: InputMaybe<Array<PresentationScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiryDate?: InputMaybe<DateTimeFilter>;
  holderConsent?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  issuerConsent?: InputMaybe<BoolFilter>;
  organizationId?: InputMaybe<StringFilter>;
  payload?: InputMaybe<JsonFilter>;
  requestId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PresentationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PresentationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PresentationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PresentationScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expiryDate?: InputMaybe<DateTimeWithAggregatesFilter>;
  holderConsent?: InputMaybe<BoolWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  issuerConsent?: InputMaybe<BoolWithAggregatesFilter>;
  organizationId?: InputMaybe<StringWithAggregatesFilter>;
  payload?: InputMaybe<JsonWithAggregatesFilter>;
  requestId?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type PresentationUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  holderConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  issuerConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutReceivedPresentationsNestedInput>;
  payload?: InputMaybe<Scalars['JSON']>;
  request?: InputMaybe<PresentationRequestUpdateOneWithoutPresentationNestedInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPresentationsNestedInput>;
};

export type PresentationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  holderConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  issuerConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  payload?: InputMaybe<Scalars['JSON']>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PresentationUpdateManyWithWhereWithoutOrganizationInput = {
  data: PresentationUpdateManyMutationInput;
  where: PresentationScalarWhereInput;
};

export type PresentationUpdateManyWithWhereWithoutUserInput = {
  data: PresentationUpdateManyMutationInput;
  where: PresentationScalarWhereInput;
};

export type PresentationUpdateManyWithoutOrganizationNestedInput = {
  connect?: InputMaybe<Array<PresentationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PresentationCreateOrConnectWithoutOrganizationInput>>;
  create?: InputMaybe<Array<PresentationCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<PresentationCreateManyOrganizationInputEnvelope>;
  delete?: InputMaybe<Array<PresentationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PresentationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PresentationWhereUniqueInput>>;
  set?: InputMaybe<Array<PresentationWhereUniqueInput>>;
  update?: InputMaybe<Array<PresentationUpdateWithWhereUniqueWithoutOrganizationInput>>;
  updateMany?: InputMaybe<Array<PresentationUpdateManyWithWhereWithoutOrganizationInput>>;
  upsert?: InputMaybe<Array<PresentationUpsertWithWhereUniqueWithoutOrganizationInput>>;
};

export type PresentationUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<PresentationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PresentationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PresentationCreateWithoutUserInput>>;
  createMany?: InputMaybe<PresentationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<PresentationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PresentationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PresentationWhereUniqueInput>>;
  set?: InputMaybe<Array<PresentationWhereUniqueInput>>;
  update?: InputMaybe<Array<PresentationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<PresentationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<PresentationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PresentationUpdateOneWithoutRequestNestedInput = {
  connect?: InputMaybe<PresentationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PresentationCreateOrConnectWithoutRequestInput>;
  create?: InputMaybe<PresentationCreateWithoutRequestInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PresentationUpdateWithoutRequestInput>;
  upsert?: InputMaybe<PresentationUpsertWithoutRequestInput>;
};

export type PresentationUpdateWithWhereUniqueWithoutOrganizationInput = {
  data: PresentationUpdateWithoutOrganizationInput;
  where: PresentationWhereUniqueInput;
};

export type PresentationUpdateWithWhereUniqueWithoutUserInput = {
  data: PresentationUpdateWithoutUserInput;
  where: PresentationWhereUniqueInput;
};

export type PresentationUpdateWithoutOrganizationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  holderConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  issuerConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  payload?: InputMaybe<Scalars['JSON']>;
  request?: InputMaybe<PresentationRequestUpdateOneWithoutPresentationNestedInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPresentationsNestedInput>;
};

export type PresentationUpdateWithoutRequestInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  holderConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  issuerConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutReceivedPresentationsNestedInput>;
  payload?: InputMaybe<Scalars['JSON']>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPresentationsNestedInput>;
};

export type PresentationUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiryDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  holderConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  issuerConsent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutReceivedPresentationsNestedInput>;
  payload?: InputMaybe<Scalars['JSON']>;
  request?: InputMaybe<PresentationRequestUpdateOneWithoutPresentationNestedInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PresentationUpsertWithWhereUniqueWithoutOrganizationInput = {
  create: PresentationCreateWithoutOrganizationInput;
  update: PresentationUpdateWithoutOrganizationInput;
  where: PresentationWhereUniqueInput;
};

export type PresentationUpsertWithWhereUniqueWithoutUserInput = {
  create: PresentationCreateWithoutUserInput;
  update: PresentationUpdateWithoutUserInput;
  where: PresentationWhereUniqueInput;
};

export type PresentationUpsertWithoutRequestInput = {
  create: PresentationCreateWithoutRequestInput;
  update: PresentationUpdateWithoutRequestInput;
};

export type PresentationWhereInput = {
  AND?: InputMaybe<Array<PresentationWhereInput>>;
  NOT?: InputMaybe<Array<PresentationWhereInput>>;
  OR?: InputMaybe<Array<PresentationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiryDate?: InputMaybe<DateTimeFilter>;
  holderConsent?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  issuerConsent?: InputMaybe<BoolFilter>;
  organization?: InputMaybe<OrganizationRelationFilter>;
  organizationId?: InputMaybe<StringFilter>;
  payload?: InputMaybe<JsonFilter>;
  request?: InputMaybe<PresentationRequestRelationFilter>;
  requestId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PresentationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  requestId?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCredential: AggregateCredential;
  aggregateCredentialRequest: AggregateCredentialRequest;
  aggregateOrganization: AggregateOrganization;
  aggregateOrganizationMember: AggregateOrganizationMember;
  aggregatePresentation: AggregatePresentation;
  aggregatePresentationRequest: AggregatePresentationRequest;
  aggregateUser: AggregateUser;
  credential?: Maybe<Credential>;
  credentialRequest?: Maybe<CredentialRequest>;
  credentialRequests: Array<CredentialRequest>;
  credentials: Array<Credential>;
  findFirstCredential?: Maybe<Credential>;
  findFirstCredentialRequest?: Maybe<CredentialRequest>;
  findFirstOrganization?: Maybe<Organization>;
  findFirstOrganizationMember?: Maybe<OrganizationMember>;
  findFirstPresentation?: Maybe<Presentation>;
  findFirstPresentationRequest?: Maybe<PresentationRequest>;
  findFirstUser?: Maybe<User>;
  groupByCredential: Array<CredentialGroupBy>;
  groupByCredentialRequest: Array<CredentialRequestGroupBy>;
  groupByOrganization: Array<OrganizationGroupBy>;
  groupByOrganizationMember: Array<OrganizationMemberGroupBy>;
  groupByPresentation: Array<PresentationGroupBy>;
  groupByPresentationRequest: Array<PresentationRequestGroupBy>;
  groupByUser: Array<UserGroupBy>;
  hello: Scalars['String'];
  organization?: Maybe<Organization>;
  organizationMember?: Maybe<OrganizationMember>;
  organizationMembers: Array<OrganizationMember>;
  organizations: Array<Organization>;
  presentation?: Maybe<Presentation>;
  presentationRequest?: Maybe<PresentationRequest>;
  presentationRequests: Array<PresentationRequest>;
  presentations: Array<Presentation>;
  profile?: Maybe<User>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateCredentialArgs = {
  cursor?: InputMaybe<CredentialWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CredentialOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CredentialWhereInput>;
};


export type QueryAggregateCredentialRequestArgs = {
  cursor?: InputMaybe<CredentialRequestWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CredentialRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CredentialRequestWhereInput>;
};


export type QueryAggregateOrganizationArgs = {
  cursor?: InputMaybe<OrganizationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryAggregateOrganizationMemberArgs = {
  cursor?: InputMaybe<OrganizationMemberWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OrganizationMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationMemberWhereInput>;
};


export type QueryAggregatePresentationArgs = {
  cursor?: InputMaybe<PresentationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PresentationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationWhereInput>;
};


export type QueryAggregatePresentationRequestArgs = {
  cursor?: InputMaybe<PresentationRequestWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PresentationRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationRequestWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryCredentialArgs = {
  where: CredentialWhereUniqueInput;
};


export type QueryCredentialRequestArgs = {
  where: CredentialRequestWhereUniqueInput;
};


export type QueryCredentialRequestsArgs = {
  cursor?: InputMaybe<CredentialRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<CredentialRequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CredentialRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CredentialRequestWhereInput>;
};


export type QueryCredentialsArgs = {
  cursor?: InputMaybe<CredentialWhereUniqueInput>;
  distinct?: InputMaybe<Array<CredentialScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CredentialOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CredentialWhereInput>;
};


export type QueryFindFirstCredentialArgs = {
  cursor?: InputMaybe<CredentialWhereUniqueInput>;
  distinct?: InputMaybe<Array<CredentialScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CredentialOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CredentialWhereInput>;
};


export type QueryFindFirstCredentialRequestArgs = {
  cursor?: InputMaybe<CredentialRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<CredentialRequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CredentialRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CredentialRequestWhereInput>;
};


export type QueryFindFirstOrganizationArgs = {
  cursor?: InputMaybe<OrganizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryFindFirstOrganizationMemberArgs = {
  cursor?: InputMaybe<OrganizationMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationMemberWhereInput>;
};


export type QueryFindFirstPresentationArgs = {
  cursor?: InputMaybe<PresentationWhereUniqueInput>;
  distinct?: InputMaybe<Array<PresentationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PresentationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationWhereInput>;
};


export type QueryFindFirstPresentationRequestArgs = {
  cursor?: InputMaybe<PresentationRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<PresentationRequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PresentationRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationRequestWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByCredentialArgs = {
  by: Array<CredentialScalarFieldEnum>;
  having?: InputMaybe<CredentialScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CredentialOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CredentialWhereInput>;
};


export type QueryGroupByCredentialRequestArgs = {
  by: Array<CredentialRequestScalarFieldEnum>;
  having?: InputMaybe<CredentialRequestScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CredentialRequestOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CredentialRequestWhereInput>;
};


export type QueryGroupByOrganizationArgs = {
  by: Array<OrganizationScalarFieldEnum>;
  having?: InputMaybe<OrganizationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryGroupByOrganizationMemberArgs = {
  by: Array<OrganizationMemberScalarFieldEnum>;
  having?: InputMaybe<OrganizationMemberScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OrganizationMemberOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationMemberWhereInput>;
};


export type QueryGroupByPresentationArgs = {
  by: Array<PresentationScalarFieldEnum>;
  having?: InputMaybe<PresentationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PresentationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationWhereInput>;
};


export type QueryGroupByPresentationRequestArgs = {
  by: Array<PresentationRequestScalarFieldEnum>;
  having?: InputMaybe<PresentationRequestScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PresentationRequestOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationRequestWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryOrganizationArgs = {
  where: OrganizationWhereUniqueInput;
};


export type QueryOrganizationMemberArgs = {
  where: OrganizationMemberWhereUniqueInput;
};


export type QueryOrganizationMembersArgs = {
  cursor?: InputMaybe<OrganizationMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationMemberWhereInput>;
};


export type QueryOrganizationsArgs = {
  cursor?: InputMaybe<OrganizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryPresentationArgs = {
  where: PresentationWhereUniqueInput;
};


export type QueryPresentationRequestArgs = {
  where: PresentationRequestWhereUniqueInput;
};


export type QueryPresentationRequestsArgs = {
  cursor?: InputMaybe<PresentationRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<PresentationRequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PresentationRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationRequestWhereInput>;
};


export type QueryPresentationsArgs = {
  cursor?: InputMaybe<PresentationWhereUniqueInput>;
  distinct?: InputMaybe<Array<PresentationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PresentationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RefreshTokensResponse = {
  __typename?: 'RefreshTokensResponse';
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  createdAt?: Maybe<Scalars['DateTime']>;
  credentialRequests: Array<CredentialRequest>;
  credentials: Array<Credential>;
  email: Scalars['String'];
  id: Scalars['String'];
  logoUrl?: Maybe<Scalars['String']>;
  memberships: Array<OrganizationMember>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  presentationRequests: Array<PresentationRequest>;
  presentations: Array<Presentation>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  verified: Scalars['Boolean'];
};


export type UserCredentialRequestsArgs = {
  cursor?: InputMaybe<CredentialRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<CredentialRequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CredentialRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CredentialRequestWhereInput>;
};


export type UserCredentialsArgs = {
  cursor?: InputMaybe<CredentialWhereUniqueInput>;
  distinct?: InputMaybe<Array<CredentialScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CredentialOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CredentialWhereInput>;
};


export type UserMembershipsArgs = {
  cursor?: InputMaybe<OrganizationMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationMemberWhereInput>;
};


export type UserPresentationRequestsArgs = {
  cursor?: InputMaybe<PresentationRequestWhereUniqueInput>;
  distinct?: InputMaybe<Array<PresentationRequestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PresentationRequestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationRequestWhereInput>;
};


export type UserPresentationsArgs = {
  cursor?: InputMaybe<PresentationWhereUniqueInput>;
  distinct?: InputMaybe<Array<PresentationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PresentationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PresentationWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  credentialRequests: Scalars['Int'];
  credentials: Scalars['Int'];
  memberships: Scalars['Int'];
  presentationRequests: Scalars['Int'];
  presentations: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  logoUrl: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
  phoneNumber: Scalars['Int'];
  updatedAt: Scalars['Int'];
  username: Scalars['Int'];
  verified: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logoUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  verified?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialRequests?: InputMaybe<CredentialRequestCreateNestedManyWithoutUserInput>;
  credentials?: InputMaybe<CredentialCreateNestedManyWithoutUserInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  memberships?: InputMaybe<OrganizationMemberCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  presentationRequests?: InputMaybe<PresentationRequestCreateNestedManyWithoutUserInput>;
  presentations?: InputMaybe<PresentationCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateNestedOneWithoutCredentialRequestsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCredentialRequestsInput>;
  create?: InputMaybe<UserCreateWithoutCredentialRequestsInput>;
};

export type UserCreateNestedOneWithoutCredentialsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCredentialsInput>;
  create?: InputMaybe<UserCreateWithoutCredentialsInput>;
};

export type UserCreateNestedOneWithoutMembershipsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMembershipsInput>;
  create?: InputMaybe<UserCreateWithoutMembershipsInput>;
};

export type UserCreateNestedOneWithoutPresentationRequestsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPresentationRequestsInput>;
  create?: InputMaybe<UserCreateWithoutPresentationRequestsInput>;
};

export type UserCreateNestedOneWithoutPresentationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPresentationsInput>;
  create?: InputMaybe<UserCreateWithoutPresentationsInput>;
};

export type UserCreateOrConnectWithoutCredentialRequestsInput = {
  create: UserCreateWithoutCredentialRequestsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCredentialsInput = {
  create: UserCreateWithoutCredentialsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMembershipsInput = {
  create: UserCreateWithoutMembershipsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPresentationRequestsInput = {
  create: UserCreateWithoutPresentationRequestsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPresentationsInput = {
  create: UserCreateWithoutPresentationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCredentialRequestsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentials?: InputMaybe<CredentialCreateNestedManyWithoutUserInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  memberships?: InputMaybe<OrganizationMemberCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  presentationRequests?: InputMaybe<PresentationRequestCreateNestedManyWithoutUserInput>;
  presentations?: InputMaybe<PresentationCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateWithoutCredentialsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialRequests?: InputMaybe<CredentialRequestCreateNestedManyWithoutUserInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  memberships?: InputMaybe<OrganizationMemberCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  presentationRequests?: InputMaybe<PresentationRequestCreateNestedManyWithoutUserInput>;
  presentations?: InputMaybe<PresentationCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateWithoutMembershipsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialRequests?: InputMaybe<CredentialRequestCreateNestedManyWithoutUserInput>;
  credentials?: InputMaybe<CredentialCreateNestedManyWithoutUserInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  presentationRequests?: InputMaybe<PresentationRequestCreateNestedManyWithoutUserInput>;
  presentations?: InputMaybe<PresentationCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateWithoutPresentationRequestsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialRequests?: InputMaybe<CredentialRequestCreateNestedManyWithoutUserInput>;
  credentials?: InputMaybe<CredentialCreateNestedManyWithoutUserInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  memberships?: InputMaybe<OrganizationMemberCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  presentations?: InputMaybe<PresentationCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateWithoutPresentationsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  credentialRequests?: InputMaybe<CredentialRequestCreateNestedManyWithoutUserInput>;
  credentials?: InputMaybe<CredentialCreateNestedManyWithoutUserInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  memberships?: InputMaybe<OrganizationMemberCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  presentationRequests?: InputMaybe<PresentationRequestCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['String'];
  logoUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  verified: Scalars['Boolean'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logoUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  verified?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logoUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  verified?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logoUrl?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  verified?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  credentialRequests?: InputMaybe<CredentialRequestOrderByRelationAggregateInput>;
  credentials?: InputMaybe<CredentialOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logoUrl?: InputMaybe<SortOrder>;
  memberships?: InputMaybe<OrganizationMemberOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  presentationRequests?: InputMaybe<PresentationRequestOrderByRelationAggregateInput>;
  presentations?: InputMaybe<PresentationOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  verified?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  LogoUrl = 'logoUrl',
  Name = 'name',
  Password = 'password',
  PhoneNumber = 'phoneNumber',
  UpdatedAt = 'updatedAt',
  Username = 'username',
  Verified = 'verified'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  logoUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  phoneNumber?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
  verified?: InputMaybe<BoolWithAggregatesFilter>;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  credentialRequests?: InputMaybe<CredentialRequestUpdateManyWithoutUserNestedInput>;
  credentials?: InputMaybe<CredentialUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  logoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberships?: InputMaybe<OrganizationMemberUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  presentationRequests?: InputMaybe<PresentationRequestUpdateManyWithoutUserNestedInput>;
  presentations?: InputMaybe<PresentationUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  verified?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  logoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  verified?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutCredentialRequestsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCredentialRequestsInput>;
  create?: InputMaybe<UserCreateWithoutCredentialRequestsInput>;
  update?: InputMaybe<UserUpdateWithoutCredentialRequestsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCredentialRequestsInput>;
};

export type UserUpdateOneRequiredWithoutCredentialsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCredentialsInput>;
  create?: InputMaybe<UserCreateWithoutCredentialsInput>;
  update?: InputMaybe<UserUpdateWithoutCredentialsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCredentialsInput>;
};

export type UserUpdateOneRequiredWithoutPresentationRequestsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPresentationRequestsInput>;
  create?: InputMaybe<UserCreateWithoutPresentationRequestsInput>;
  update?: InputMaybe<UserUpdateWithoutPresentationRequestsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPresentationRequestsInput>;
};

export type UserUpdateOneRequiredWithoutPresentationsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPresentationsInput>;
  create?: InputMaybe<UserCreateWithoutPresentationsInput>;
  update?: InputMaybe<UserUpdateWithoutPresentationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPresentationsInput>;
};

export type UserUpdateOneWithoutMembershipsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMembershipsInput>;
  create?: InputMaybe<UserCreateWithoutMembershipsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutMembershipsInput>;
  upsert?: InputMaybe<UserUpsertWithoutMembershipsInput>;
};

export type UserUpdateWithoutCredentialRequestsInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  credentials?: InputMaybe<CredentialUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  logoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberships?: InputMaybe<OrganizationMemberUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  presentationRequests?: InputMaybe<PresentationRequestUpdateManyWithoutUserNestedInput>;
  presentations?: InputMaybe<PresentationUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  verified?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCredentialsInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  credentialRequests?: InputMaybe<CredentialRequestUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  logoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberships?: InputMaybe<OrganizationMemberUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  presentationRequests?: InputMaybe<PresentationRequestUpdateManyWithoutUserNestedInput>;
  presentations?: InputMaybe<PresentationUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  verified?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMembershipsInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  credentialRequests?: InputMaybe<CredentialRequestUpdateManyWithoutUserNestedInput>;
  credentials?: InputMaybe<CredentialUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  logoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  presentationRequests?: InputMaybe<PresentationRequestUpdateManyWithoutUserNestedInput>;
  presentations?: InputMaybe<PresentationUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  verified?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPresentationRequestsInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  credentialRequests?: InputMaybe<CredentialRequestUpdateManyWithoutUserNestedInput>;
  credentials?: InputMaybe<CredentialUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  logoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberships?: InputMaybe<OrganizationMemberUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  presentations?: InputMaybe<PresentationUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  verified?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPresentationsInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  credentialRequests?: InputMaybe<CredentialRequestUpdateManyWithoutUserNestedInput>;
  credentials?: InputMaybe<CredentialUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  logoUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  memberships?: InputMaybe<OrganizationMemberUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  presentationRequests?: InputMaybe<PresentationRequestUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  verified?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCredentialRequestsInput = {
  create: UserCreateWithoutCredentialRequestsInput;
  update: UserUpdateWithoutCredentialRequestsInput;
};

export type UserUpsertWithoutCredentialsInput = {
  create: UserCreateWithoutCredentialsInput;
  update: UserUpdateWithoutCredentialsInput;
};

export type UserUpsertWithoutMembershipsInput = {
  create: UserCreateWithoutMembershipsInput;
  update: UserUpdateWithoutMembershipsInput;
};

export type UserUpsertWithoutPresentationRequestsInput = {
  create: UserCreateWithoutPresentationRequestsInput;
  update: UserUpdateWithoutPresentationRequestsInput;
};

export type UserUpsertWithoutPresentationsInput = {
  create: UserCreateWithoutPresentationsInput;
  update: UserUpdateWithoutPresentationsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  credentialRequests?: InputMaybe<CredentialRequestListRelationFilter>;
  credentials?: InputMaybe<CredentialListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  logoUrl?: InputMaybe<StringNullableFilter>;
  memberships?: InputMaybe<OrganizationMemberListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  presentationRequests?: InputMaybe<PresentationRequestListRelationFilter>;
  presentations?: InputMaybe<PresentationListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  username?: InputMaybe<StringFilter>;
  verified?: InputMaybe<BoolFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken?: string | null, refreshToken?: string | null } };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthResponse', accessToken?: string | null, refreshToken?: string | null } };

export type UpdateOneUserMutationVariables = Exact<{
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}>;


export type UpdateOneUserMutation = { __typename?: 'Mutation', updateOneUser?: { __typename?: 'User', id: string, username: string, phoneNumber?: string | null, email: string, name: string, logoUrl?: string | null, verified: boolean, createdAt?: any | null, updatedAt?: any | null } | null };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'User', id: string, username: string, phoneNumber?: string | null, email: string, name: string, logoUrl?: string | null, verified: boolean, createdAt?: any | null, updatedAt?: any | null } | null };


export const LoginDocument = gql`
    mutation Login($password: String!, $username: String!) {
  login(password: $password, username: $username) {
    accessToken
    refreshToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!, $email: String!, $name: String!) {
  register(username: $username, password: $password, email: $email, name: $name) {
    accessToken
    refreshToken
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateOneUserDocument = gql`
    mutation UpdateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateOneUser(data: $data, where: $where) {
    id
    username
    phoneNumber
    email
    name
    logoUrl
    verified
    createdAt
    updatedAt
  }
}
    `;
export type UpdateOneUserMutationFn = Apollo.MutationFunction<UpdateOneUserMutation, UpdateOneUserMutationVariables>;

/**
 * __useUpdateOneUserMutation__
 *
 * To run a mutation, you first call `useUpdateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneUserMutation, { data, loading, error }] = useUpdateOneUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateOneUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneUserMutation, UpdateOneUserMutationVariables>(UpdateOneUserDocument, options);
      }
export type UpdateOneUserMutationHookResult = ReturnType<typeof useUpdateOneUserMutation>;
export type UpdateOneUserMutationResult = Apollo.MutationResult<UpdateOneUserMutation>;
export type UpdateOneUserMutationOptions = Apollo.BaseMutationOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>;
export const ProfileDocument = gql`
    query Profile {
  profile {
    id
    username
    phoneNumber
    email
    name
    logoUrl
    verified
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;