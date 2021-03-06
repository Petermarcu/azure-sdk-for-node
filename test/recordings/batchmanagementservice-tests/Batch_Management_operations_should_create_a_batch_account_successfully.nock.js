// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk?api-version=2020-05-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/operationResults/fdb66039-4251-4a20-a021-f145d14205b2?api-version=2020-05-01',
  'retry-after': '15',
  'x-ms-request-id': 'fdb66039-4251-4a20-a021-f145d14205b2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'bae72e18-0500-4e7a-a993-3c7266213456',
  'x-ms-routing-request-id':
   'WESTUS:20200604T062208Z:bae72e18-0500-4e7a-a993-3c7266213456',
  date: 'Thu, 04 Jun 2020 06:22:08 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/operationResults/fdb66039-4251-4a20-a021-f145d14205b2?api-version=2020-05-01')
  .reply(200, "{\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk\",\"name\":\"batchtestnodesdk\",\"type\":\"Microsoft.Batch/batchAccounts\",\"location\":\"japaneast\",\"properties\":{\"accountEndpoint\":\"batchtestnodesdk.japaneast.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"dedicatedCoreQuota\":0,\"dedicatedCoreQuotaPerVMFamily\":[{\"name\":\"standardAv2Family\",\"coreQuota\":0},{\"name\":\"standardDv2Family\",\"coreQuota\":0},{\"name\":\"standardDv3Family\",\"coreQuota\":0},{\"name\":\"standardEv3Family\",\"coreQuota\":0},{\"name\":\"standardDSv2Family\",\"coreQuota\":0},{\"name\":\"standardDSv3Family\",\"coreQuota\":0},{\"name\":\"standardESv3Family\",\"coreQuota\":0},{\"name\":\"standardFFamily\",\"coreQuota\":0},{\"name\":\"standardFSFamily\",\"coreQuota\":0},{\"name\":\"standardA0_A7Family\",\"coreQuota\":0},{\"name\":\"standardA8_A11Family\",\"coreQuota\":0},{\"name\":\"standardDFamily\",\"coreQuota\":0},{\"name\":\"standardGFamily\",\"coreQuota\":0},{\"name\":\"basicAFamily\",\"coreQuota\":0},{\"name\":\"standardNVFamily\",\"coreQuota\":0},{\"name\":\"standardNVPromoFamily\",\"coreQuota\":0},{\"name\":\"standardNCFamily\",\"coreQuota\":0},{\"name\":\"standardNCPromoFamily\",\"coreQuota\":0},{\"name\":\"standardHFamily\",\"coreQuota\":0},{\"name\":\"standardHPromoFamily\",\"coreQuota\":0},{\"name\":\"standardMSFamily\",\"coreQuota\":0},{\"name\":\"standardDSFamily\",\"coreQuota\":0},{\"name\":\"standardGSFamily\",\"coreQuota\":0},{\"name\":\"standardLSFamily\",\"coreQuota\":0},{\"name\":\"standardLSv2Family\",\"coreQuota\":0},{\"name\":\"standardNCSv2Family\",\"coreQuota\":0},{\"name\":\"standardNDSFamily\",\"coreQuota\":0},{\"name\":\"standardNCSv3Family\",\"coreQuota\":0},{\"name\":\"standardFSv2Family\",\"coreQuota\":0},{\"name\":\"standardHBSFamily\",\"coreQuota\":0},{\"name\":\"standardHCSFamily\",\"coreQuota\":0},{\"name\":\"standardNVSv3Family\",\"coreQuota\":0},{\"name\":\"standardHBrsv2Family\",\"coreQuota\":0},{\"name\":\"standardDASv4Family\",\"coreQuota\":0},{\"name\":\"standardEAv4Family\",\"coreQuota\":0},{\"name\":\"standardEASv4Family\",\"coreQuota\":0}],\"dedicatedCoreQuotaPerVMFamilyEnforced\":false,\"lowPriorityCoreQuota\":0,\"poolQuota\":100,\"activeJobAndJobScheduleQuota\":300,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/testaccountfornode\",\"lastKeySync\":\"2020-06-04T06:22:08.0770946Z\"},\"poolAllocationMode\":\"BatchService\",\"publicNetworkAccess\":\"Enabled\",\"encryption\":{\"keySource\":\"Microsoft.Batch\"}},\"identity\":{\"type\":\"None\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2482',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 04 Jun 2020 06:22:39 GMT',
  etag: '"0x8D8084FAE2B3AAB"',
  'x-ms-correlation-request-id': '044df0fc-b681-41d2-b592-611bc2a641b0',
  'x-ms-request-id': '9d001e0b-608c-445d-b930-be8520e45d19',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20200604T062239Z:044df0fc-b681-41d2-b592-611bc2a641b0',
  date: 'Thu, 04 Jun 2020 06:22:38 GMT',
  connection: 'close' });
 return result; }]];