// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_map_pb = require('../proto/map_pb.js');

function serialize_proto_GetBusesLocationRequest(arg) {
  if (!(arg instanceof proto_map_pb.GetBusesLocationRequest)) {
    throw new Error('Expected argument of type proto.GetBusesLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetBusesLocationRequest(buffer_arg) {
  return proto_map_pb.GetBusesLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_GetBusesLocationResponse(arg) {
  if (!(arg instanceof proto_map_pb.GetBusesLocationResponse)) {
    throw new Error('Expected argument of type proto.GetBusesLocationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_GetBusesLocationResponse(buffer_arg) {
  return proto_map_pb.GetBusesLocationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MapService = exports.MapService = {
  getBusesLocation: {
    path: '/proto.Map/GetBusesLocation',
    requestStream: false,
    responseStream: false,
    requestType: proto_map_pb.GetBusesLocationRequest,
    responseType: proto_map_pb.GetBusesLocationResponse,
    requestSerialize: serialize_proto_GetBusesLocationRequest,
    requestDeserialize: deserialize_proto_GetBusesLocationRequest,
    responseSerialize: serialize_proto_GetBusesLocationResponse,
    responseDeserialize: deserialize_proto_GetBusesLocationResponse,
  },
};

exports.MapClient = grpc.makeGenericClientConstructor(MapService);
