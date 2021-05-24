# Sample Lightning Component Using Metadata Dependency API (Tooling API)

This component can be used to check for dependencies in a customer org on items in a managed package, for example, if a customer is planning to uninstall a package and wants to understand any dependencies they will need to update before doing so. 

The component displays all the existing managed package namespaces in the org and allows the user to select which to check for dependencies. 

Note that this is just a PoC and several updates are needed for usability in a production context, i.e., pagination, table sort, etc. 
Note that a max of 2,000 results can be returned. 

# Metadata Dependence API Information: 
* https://developer.salesforce.com/docs/atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacomponentdependency.htm
* More details (https://developer.salesforce.com/docs/atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_metadatacomponentdependency_tooling_usage.htm)
* https://developer.salesforce.com/blogs/2019/09/learn-moar-in-winter-20-with-metadata-dependency-queries.html
