import { parseResolveInfo, simplifyParsedResolveInfoFragmentWithType } from 'graphql-parse-resolve-info';

export const parseQueryFields = (resolveInfo, resolveType) => {
    const parsedResolveInfoFragment = parseResolveInfo(resolveInfo);
    const { fields } = simplifyParsedResolveInfoFragmentWithType(
                parsedResolveInfoFragment,
                resolveType
            );
    const queryFields = {};
    Object.keys(fields).forEach(key => queryFields[key] = 1);
    return queryFields;
}